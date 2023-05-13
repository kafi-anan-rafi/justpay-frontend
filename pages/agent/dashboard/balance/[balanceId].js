import axios from "axios";

export default function Balance({ balance }) {
  return (
    <>
      <h2>Balance</h2>
      <p>Available balance: {balance.balance}</p>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const id = context.params.balanceId;

  const res = await axios.get("http://localhost:3000/agent/info/balance/" + id);
  const balance = await res.data;

  return {
    props: { balance }
  }
}