import { doc, FirestoreError, getDoc } from 'firebase/firestore';
import { useQuery, UseQueryOptions } from 'react-query';
import { firestore } from 'services/firebase';
import { Collection, DocumentId } from 'types';

/**
 * React hook that retrieves a document from a collection
 * @param collection - The collection to retrieve the document from
 * @param groupId - The document's ID
 * @param options - The query options
 * @returns A React Query object containing the group data.
 */
export function useFirebaseDocument<T>(
  collection: Collection,
  documentId: DocumentId,
  options: UseQueryOptions
) {
  const queryKey = [collection, documentId];

  return useQuery<T, FirestoreError>({
    queryKey,
    queryFn: async () => {
      const docRef = doc(firestore, queryKey.join('/'));
      const snapshot = await getDoc(docRef);
      return snapshot.data() as T;
    },
    enabled: !!documentId && (options.enabled ?? true),
  });
}
