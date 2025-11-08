import ErrorBoundary from "@/components/ErrorBoundary";
import ErrorProneComponent from "@/components/ErrorProneComponent";

const ErrorTest: React.FC = () => {

    return (
    <ErrorBoundary>
        <ErrorProneComponent />
    </ErrorBoundary>
    );
}
export default ErrorTest;