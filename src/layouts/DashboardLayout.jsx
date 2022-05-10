import { Route } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
    return (
        <div >
            {children}
        </div>
    );
};

const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <DashboardLayout>
                    <Component {...props} />
                </DashboardLayout>
            )}
        />
    );
};

export default DashboardLayoutRoute;