export default function Withdraw() {
  return (
    <div>
      <h1>Withdraw</h1>
      <form>
        <label for="amount">Amount</label> <br />
        <input type="number" id="amount" name="amount" /> <br />

        <label for="phone">Phone</label> <br />
        <input type="text" id="phone" name="phone" /> <br />

        <button type="submit">Withdraw</button>
      </form>
    </div>
  )
}
