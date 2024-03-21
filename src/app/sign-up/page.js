export default function Page() {
  return (
    <>
      <h2>Sign Up</h2>
      <table>
        <tbody>
          <form method="post">
            <tr>
              <td>
                <label htmlFor="name">Name:</label>
              </td>
              <td>
                <input type="text" id="name" name="name" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email:</label>
              </td>
              <td>
                <input type="email" id="email" name="email" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password:</label>
              </td>
              <td>
                <input type="password" id="password" name="password" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" value="Submit" />
              </td>
            </tr>
          </form>
        </tbody>
      </table>
    </>
  );
}
