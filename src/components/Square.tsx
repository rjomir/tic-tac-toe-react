import "./style.css"

interface Props {
    index: number;
    value: string;
    handleClick(index: number): void;
}

const Square = (props: Props) => {
    const { index, value, handleClick } = props;

    return (
        <button className="square" onClick={() => handleClick(index)}>
            {value}
        </button>
    );
};
export default Square;
