import {useQuery} from '@tanstack/react-query';

import {api} from '../common/axios';
import {ENDPOINTS} from '../common/constants';
import {Product} from '../types/common';

const useList = () => {
  return useQuery({
    queryKey: [ENDPOINTS.products],
    queryFn: async () => {
      return api.get<Array<Product>>(ENDPOINTS.products).then(res => res.data);
    },
  });
};

const useDetail = (id: number) => {
  return useQuery({
    queryKey: [ENDPOINTS.productDetail(id)],
    queryFn: async () => {
      return api
        .get<Product>(ENDPOINTS.productDetail(id))
        .then(res => res.data);
    },
  });
};

export const products = {
  useList,
  useDetail,
};
