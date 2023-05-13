export default function Input({ type, id, name, label }) {
  return (
    <>
      <label htmlFor={name}>{label}</label> <br />
      <input type={type} id={id} name={name} /> <br />
    </>
  )
}