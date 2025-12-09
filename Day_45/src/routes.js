import paths from "./configs/path";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import DemoModal from "./pages/DemoModal";
import DemoTab from "./pages/DemoTab";

const routes = [
    {
        layout: DefaultLayout,
        children: [
            { path: paths.home, component: Home },
            { path: paths.demoModal, component: DemoModal },
            { path: paths.demoTab, component: DemoTab },
        ],
    },
];

export default routes;
