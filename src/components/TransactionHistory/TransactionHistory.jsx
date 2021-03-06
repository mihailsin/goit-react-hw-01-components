import propTypes from 'prop-types';
import { Head, Row, Item } from './TransactionHistory.styled';
export const TransactionHistory = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <Head>TYPE</Head>
          <Head>AMOUNT</Head>
          <Head>CURRENCY</Head>
        </tr>
      </thead>

      <tbody>
        {data.map(({ id, type, amount, currency }) => {
          return (
            <Row key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </Row>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  data: propTypes.array.isRequired,
};
