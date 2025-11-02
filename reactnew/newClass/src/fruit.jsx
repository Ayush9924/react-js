import { createRoot } from 'react-dom/client';

function Table() {
  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>Fruits</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Coconut</td>
            <td>80</td>
          </tr>
          <tr>
            <td>Guava</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Grapes</td>
            <td>60</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>330</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

createRoot(document.getElementById('root')).render(
    <Table />
);
// react users a contaainer to render html IN A web page


// create a program using jsx expressions that calculates and shows user details that calcualte the current age and shows other details of user like name, birth year on the web page
