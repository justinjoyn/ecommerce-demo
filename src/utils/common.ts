import numeral from 'numeral';

export const formatAmount = (
  amount: number,
  currencySymbol: string = '£',
  fallback = '£0',
) => {
  if (!amount) {
    return fallback;
  }

  //Extract the sign to be prepended after formatting
  const absAmount = Math.abs(amount);
  const sign = amount < 0 ? '-' : '';

  //Floating point precision required for currency
  const decimals = (absAmount.toString().split('.')[1] || '').length;
  const precisionFormat = '00';

  //Format the amount
  const format =
    absAmount === 0 || decimals > 0 ? `0,0[.]${precisionFormat}` : '0,0.[00]';
  const formattedAmount = numeral(absAmount).format(format);

  return `${sign}${currencySymbol}${formattedAmount}`;
};

/**
 * Some images are served over http, which causes issues in production.
 * If the image is served over http, we replace it with https.
 * An alternative would be to set NSAppTransportSecurity in Info.plist
 */
export const getSecureLink = (url: string) => {
  if (!url) {
    return '';
  }
  const secureUrl = url.replace('http://', 'https://');
  return secureUrl;
};
