import { useMutation } from '@tanstack/react-query';
import { userClient } from '../clients/userClient';

export function useGetUserDetails() {
  return useMutation((userClient as any).getUser);
}
