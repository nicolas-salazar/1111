import {
	type User,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut as firebaseSignOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import type { AppUser } from "@1111/shared";
import { auth, db } from "@/lib/firebase";

type AuthContextValue = {
	currentUser: AppUser | null;
	loading: boolean;
	signInWithGoogle: () => Promise<void>;
	signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

/**
 * Fetches the user's profile from Firestore on login.
 * Creates the profile doc if it's the first time this user signs in.
 */
async function syncUserProfile(firebaseUser: User): Promise<AppUser> {
	const ref = doc(db, "users", firebaseUser.uid);
	const snap = await getDoc(ref);

	if (snap.exists()) {
		return snap.data() as AppUser;
	}

	const newUser: AppUser = {
		uid: firebaseUser.uid,
		displayName: firebaseUser.displayName,
		email: firebaseUser.email,
		photoURL: firebaseUser.photoURL,
		coupleId: null,
	};

	await setDoc(ref, newUser);
	return newUser;
}

export function AuthProvider({ children }: { children: ReactNode }) {
	const [currentUser, setCurrentUser] = useState<AppUser | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
			if (firebaseUser) {
				try {
					const user = await syncUserProfile(firebaseUser);
					setCurrentUser(user);
				} catch (err) {
					console.error("[AuthContext] syncUserProfile failed:", err);
				}
			} else {
				setCurrentUser(null);
			}
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	async function signInWithGoogle() {
		await signInWithPopup(auth, new GoogleAuthProvider());
	}

	async function signOut() {
		await firebaseSignOut(auth);
		setCurrentUser(null);
	}

	return (
		<AuthContext.Provider
			value={{ currentUser, loading, signInWithGoogle, signOut }}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
	return ctx;
}
