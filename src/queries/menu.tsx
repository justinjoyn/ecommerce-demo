import {useQuery} from '@tanstack/react-query';

import {api} from '../common/axios';
import {ENDPOINTS} from '../common/constants';
import {Menu} from '../types/common';

const useList = () => {
  return useQuery({
    queryKey: [ENDPOINTS.menu],
    queryFn: async () => {
      return api.get<Array<Menu>>(ENDPOINTS.menu).then(res => res.data);
    },
  });
};

export const menu = {
  useList,
};
