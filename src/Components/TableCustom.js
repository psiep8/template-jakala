import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function TableCustom() {
  return (
    <>
      <div className="flex justify-center w-full mt-6">
        <div className="w-3/4">
          <TableContainer component={Paper} className=" max-h-[500px]">
            <Table
              stickyHeader
              className="min-w-[650px]"
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell className=" font-raleway">Dessert</TableCell>
                  <TableCell align="right" className=" font-raleway">
                    Calories
                  </TableCell>
                  <TableCell className=" font-raleway" align="right">
                    Fat&nbsp;(g)
                  </TableCell>
                  <TableCell className=" font-raleway" align="right">
                    Carbs&nbsp;(g)
                  </TableCell>
                  <TableCell className=" font-raleway" align="right">
                    Protein&nbsp;(g)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      className=" font-raleway"
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell className=" font-raleway" align="right">
                      {row.calories}
                    </TableCell>
                    <TableCell className=" font-raleway" align="right">
                      {row.fat}
                    </TableCell>
                    <TableCell className=" font-raleway" align="right">
                      {row.carbs}
                    </TableCell>
                    <TableCell className=" font-raleway" align="right">
                      {row.protein}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default TableCustom;
