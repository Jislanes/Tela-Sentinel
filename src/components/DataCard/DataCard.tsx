import * as React from "react";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  BiggerCard,
  Container,
  TableConf,
  ButtonSelected,
  ContainerButton,
} from "./Styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { FaSistrix } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function BasicCard() {
  const [produtos, setProdutos] = React.useState([]);
  const [filtro, setFiltro] = React.useState([]);
  const [open, setOpen] = useState<boolean>(false);
  const [openMessage, setOpenMessage] = React.useState(false);
  const [activeObject, setActiveObject] = React.useState(null);
  const [activeObjectMessage, setActiveObjectMessage] = React.useState(null);
  const [info, setInfo] = useState<boolean>(false);
  const [warning, setWarning] = useState<boolean>(false);
  const [danger, setDanger] = useState<boolean>(false);
  const [all, setAll] = useState<boolean>(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    fetch("http://localhost:5000/produtos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setProdutos(data));
  }, []);

  const handleClose = () => {
    setOpen(false);
    setOpenMessage(false);
  };

  function handleLevelInfo(e: any) {
    const idButton = e.target.id;
    const filter = produtos.filter((e: any) => e.Level === idButton);
    setFiltro(filter);
    setInfo(true);
    setWarning(false);
    setDanger(false);
    setAll(false);
  }
  function handleLevelWarning(e: any) {
    const idButton = e.target.id;
    const filter = produtos.filter((e: any) => e.Level === idButton);
    setFiltro(filter);

    setInfo(false);
    setWarning(true);
    setDanger(false);
    setAll(false);
  }
  function handleLevelDanger(e: any) {
    const idButton = e.target.id;
    const filter = produtos.filter((e: any) => e.Level === idButton);
    setFiltro(filter);
    setInfo(false);
    setWarning(false);
    setDanger(true);
    setAll(false);
  }

  function handleAll() {
    const elements = produtos;
    setFiltro(elements);
    setInfo(false);
    setWarning(false);
    setDanger(false);
    setAll(true);
  }

  const transformaData: any = (data: any) => {
    const dataComplete = new Date(data);
    const dataFormatada = dataComplete.toLocaleDateString("pt-BR");
    return dataFormatada;
  };

  return (
    <Container>
      <Card>
        <BiggerCard>
          <CardContent>
            <Stack direction="row" spacing={2}>
              <ButtonSelected>
                <Button
                  onClick={handleAll}
                  className={all ? "all" : "default"}
                  id="Todos"
                >
                  Todos
                </Button>
                <Button
                  onClick={handleLevelInfo}
                  className={info ? "info" : "default"}
                  id="Info"
                >
                  Info
                </Button>
                <Button
                  onClick={handleLevelWarning}
                  className={warning ? "warning" : "default"}
                  id="Warning"
                >
                  Warning
                </Button>
                <Button
                  onClick={handleLevelDanger}
                  className={danger ? "danger" : "default"}
                  id="Error"
                >
                  Danger
                </Button>
              </ButtonSelected>
            </Stack>
            <TableConf>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Aplication</TableCell>
                      <TableCell align="center">Enviroment</TableCell>
                      <TableCell align="center">Date</TableCell>
                      <TableCell align="center">Thread</TableCell>
                      <TableCell align="center">Level</TableCell>
                      <TableCell align="center">Logger</TableCell>
                      <TableCell align="center">Message</TableCell>
                      <TableCell align="center">Exception</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filtro.map((filtro: any) => (
                      <TableRow
                        key={filtro.Id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {filtro.Application}
                        </TableCell>
                        <TableCell align="center">
                          {filtro.Enviroment}
                        </TableCell>
                        <TableCell align="center">
                          {transformaData(filtro.Date)}
                        </TableCell>
                        <TableCell align="center">
                          <button
                            onClick={() => {
                              setActiveObject(filtro.Thread);
                              setOpen(true);
                            }}
                          >
                            <FaSistrix />
                          </button>
                          <Dialog
                            fullScreen={fullScreen}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="responsive-dialog-title"
                          >
                            <DialogContent>
                              <DialogContentText>
                                <Typography>{activeObject}</Typography>
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <ContainerButton>
                                <Button autoFocus onClick={handleClose}>
                                  Fechar
                                </Button>
                              </ContainerButton>
                            </DialogActions>
                          </Dialog>
                        </TableCell>
                        <TableCell align="center">{filtro.Level}</TableCell>
                        <TableCell align="center">{filtro.Logger}</TableCell>
                        <TableCell align="center">
                          <button
                            onClick={() => {
                              setActiveObjectMessage(filtro.Message);
                              setOpenMessage(true);
                            }}
                          >
                            <FaSistrix />
                          </button>
                          <Dialog
                            fullScreen={fullScreen}
                            open={openMessage}
                            onClose={handleClose}
                            aria-labelledby="responsive-dialog-title"
                          >
                            <DialogContent>
                              <DialogContentText>
                                <Typography>{activeObjectMessage}</Typography>
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <ContainerButton>
                                <Button autoFocus onClick={handleClose}>
                                  Fechar
                                </Button>
                              </ContainerButton>
                            </DialogActions>
                          </Dialog>
                        </TableCell>
                        <TableCell align="center">{filtro.Exception}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TableConf>
          </CardContent>
        </BiggerCard>
      </Card>
    </Container>
  );
}
