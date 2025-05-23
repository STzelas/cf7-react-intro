/**
 * Στα props είναι πολύ σημαντικό
 * να δηλώνουμε τον τύπο!!!
 * Το title θα το δηλώσουμε
 * μέσα στο App.tsx
 */
// type Props = {
//     title: string;
// }

// Γίνεται και με interface
interface Props {
    title: string;
}

const ArrowFunctionalComponentWithProps = ({title}:Props) => {
    return <h1 className={"text-center text-xl font-bold mt-12"}>{title}</h1>;
}

export default ArrowFunctionalComponentWithProps;