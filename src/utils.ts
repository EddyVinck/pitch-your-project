const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
export const formatMoney = (amount: number) => formatter.format(amount);
