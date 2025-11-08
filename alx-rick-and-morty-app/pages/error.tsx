import ErrorBoundary from "@/components/ErrorBoundary";
import ErrorProneComponent from "@/components/ErrorProneComponent";

const Error: React.FC = () => {

    return (
    <ErrorBoundary>
        <ErrorProneComponent />
    </ErrorBoundary>
    );
}
export default Error;