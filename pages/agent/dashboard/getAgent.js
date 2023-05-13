import { useRouter } from "next/router";
import { useState } from "react";
import UserbyName from "./userbyName";

export default function GetAgent({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
    // console.log(inputValue);
    // redirect to the same page with query params containing the input value
    router.push({
      pathname: 'getAgent',
      query: { inputValue: inputValue }
    });
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      {data.status !== null ? <UserbyName user={data} /> : data.status}
    </>
  )
}

export async function getServerSideProps({ query }) {
  const name = query.inputValue;
  try {
    const response = await axios.get('http://localhost:3000/agent/profileByName/' + name);
    const data = await response.data;
    console.log(data);
    return {
      props: {
        data
      }
    };

  } catch (error) {

    return {
      props: {
        data: { status: "enter valid user name" }
      }
    };
  }
}