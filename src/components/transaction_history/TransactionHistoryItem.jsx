import css from './TransactionHistoryItemn.module.css';

export default function TransactionHistoryItemn({ type, amount, currency }) {
  return (
    <>
      <td className={css['type-column']}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}
