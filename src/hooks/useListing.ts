import { doc, FirestoreError, getDoc } from 'firebase/firestore';
import { useQuery, UseQueryOptions } from 'react-query';
import { firestore } from 'services/firebase';
import { Listing } from 'types';

/**
 * React hook that retrieves a document from a collection
 * @param listing - The listing name to be retrieved
 * @param options - The query options
 * @returns A React Query object containing the group data.
 */
export function useListing<T>(listing: Listing, options: UseQueryOptions) {
  const queryKey = ['listing', listing];

  return useQuery<T, FirestoreError>({
    queryKey,
    queryFn: async () => {
      const docRef = doc(firestore, queryKey.join('/'));
      const snapshot = await getDoc(docRef);
      const response = snapshot.data();
      return Object.values(response ?? {}) as T;
    },
    enabled: !!listing && (options.enabled ?? true),
  });
}
