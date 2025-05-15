import { TABLE_NAMES } from "@/constants/tableNames"
import { db, addDoc, collection } from "@/services/firebase"

export async function createPostToFirestore(data) {
	try {
		await addDoc(collection(db, TABLE_NAMES.POSTS), {
			...data,
			created_at: new Date()
		});
		console.log('🔥 Data saved!');
	} catch (error) {
		console.error('❌ Firebase error:', error);
	}
}
