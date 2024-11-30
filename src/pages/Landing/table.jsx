import { Box, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"

export const StatsTable = ({rows,columns})=>{
    return (
        <Box className='wrapperTable'>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center" >
                Age of Impacting Vehicles
              </TableCell>
              <TableCell align="center" colSpan={3}>
              Total Accidents
              </TableCell>
              <TableCell align="center" colSpan={3}>
              Persons Killed
              </TableCell>
              <TableCell align="center" colSpan={3}>
              Persons Injured
              </TableCell>
            </TableRow>
            <TableRow>
              {columns?.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              ?.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns?.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        </Box>
    )
}