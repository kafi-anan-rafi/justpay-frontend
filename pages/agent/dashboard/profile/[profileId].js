import axios from "axios";

export default function Profile({ agentInfo }) {
  return (
    <>
      <h2>Profile</h2>
      <p>Name: {agentInfo.name}</p>
      <p>Email: {agentInfo.email}</p>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const id = context.params.profileId;

  const res = await axios.get("http://localhost:3000/agent/profile/" + id);
  const agentInfo = await res.data;

  return {
    props: { agentInfo }
  }
}