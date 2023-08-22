export function TableInfo(props: any) {
return(
    <button type="button">
        <strong>Mesa { props.num }</strong>
        <span>{ props.itens } itens</span>
    </button>
)
}