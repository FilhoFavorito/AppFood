import { Container, Board, OrdersContainer} from "./styles";
import { Queue } from "./Queue";
import { TableInfo } from "./TableInfo";

export function Orders() {
    return (
        <Container>
            <Board>
                <Queue/>
                <OrdersContainer>
                    <TableInfo num="2" itens="2"/>
                    <TableInfo num="2" itens="2"/> 
                </OrdersContainer>
            </Board>
            <Board>
               <Queue/> 
                <OrdersContainer>
                    <TableInfo num="2" itens="2"/>
                    <TableInfo num="2" itens="2"/> 
                </OrdersContainer>
            </Board>
            <Board>
                <Queue/>
                <OrdersContainer>
                    <TableInfo num="2" itens="2"/>
                    <TableInfo num="2" itens="2"/> 
                </OrdersContainer>
            </Board>
        </Container>
    )
}