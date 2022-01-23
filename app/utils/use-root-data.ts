// this is needed by things the root needs, so to avoid circular deps we have to
// put it in its own file which is silly I know...

import {useMatchLoaderData} from './providers'
import type {LoaderData} from '../root'
import {handle} from '../root'

export const useRootData = () => useMatchLoaderData<LoaderData>(handle.id)
export function useUser() {
  const {user} = useRootData()
  if (!user) throw new Error('User is required when using useUser')
  return user
}
