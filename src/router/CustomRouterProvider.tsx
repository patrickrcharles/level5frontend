// import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { LinearProgress } from '@mui/material';
// import { useMemo } from 'react';
// import AccountRequest from '@/views/AccountRequest';
// import Home from '@/views/Home';
// import Error from '@/views/Error';
// import AccountManagement from '@/views/admin/AccountManagement';
// import FileManagement from '@/views/admin/FileManagement';
// import SystemConfiguration from '@/views/admin/SystemConfiguration';
// import AdminMwslinArchive from '@/views/admin/MwslinArchive';
// import SendEmail from '@/views/admin/SendEmail';
// import MaintenanceMwslinArchive from '@/views/maintenance/MwslinArchive';
// import NsnList from '@/views/maintenance/NsnList';
// import TamcnList from '@/views/maintenance/TamcnList';
// import TamcnSummary from '@/views/reports/TamcnSummary';
// import Dser from '@/views/reports/Dser';
// import FundingAdjustment from '@/views/reports/FundingAdjustment';
// import ChangeRequestList from '@/views/reports/ChangeRequestList';
// import FundingDocumentList from '@/views/reports/FundingDocumentList';
// import FundingRequirements from '@/views/reports/FundingRequirements';
// import UpdateHistory from '@/views/help/UpdateHistory';
// import SessionExpired from '@/views/SessionExpired';
// import MwslinDetails from '@/views/mwslin/mwslinDetails';
// import MwslinNew from '@/views/mwslin/MwslinNew';
// import CrDetails from '@/views/changeRequest/CrDetails';
// import CrNew from '@/views/changeRequest/CrNew';
// import FdDetails from '@/views/fundingDocument/FdDetails';
// import FdNew from '@/views/fundingDocument/FdNew';
// import useUser from '@/utils/useUser';
// import Layout from '@/components/Layout';
// import AccessDenied from '@/views/AccessDenied';
// import homeLoader from '@/loaders/homeLoader';
// import mwslinDetailsLoader from '@/loaders/mwslin/mwslinDetailsLoader';
// import newMwslinLoader from '@/loaders/mwslin/newMwslinLoader';
// import mwslinDetailsAction from '@/actions/mwslinDetails.Action';
// import RoleProtected from './RoleProtected';
// import MaintenanceModeProtected from './MaintenanceModeProtected';
// import ActiveUserProtected from './ActiveUserProtected';
// import UnderMaintenance from '../views/UnderMaintenance';

// export default function CustomRouterProvider() {
//   const user = useUser();
//   const router = useMemo(
//     () =>
//       createBrowserRouter([
//         {
//           id: 'root',
//           errorElement: <Error />,
//           element: (
//             <MaintenanceModeProtected>
//               <ActiveUserProtected>
//                 <Layout>
//                   <Outlet />
//                 </Layout>
//               </ActiveUserProtected>
//             </MaintenanceModeProtected>
//           ),
//           children: [
//             {
//               id: 'maintenance',
//               children: [
//                 {
//                   id: 'maintenance-tamcn-list',
//                   path: '/maintenance/tamcn-list',
//                   Component: TamcnList
//                 },
//                 {
//                   id: 'maintenance-nsn-list',
//                   path: '/maintenance/nsn-list',
//                   Component: NsnList
//                 },
//                 {
//                   id: 'maintenance-mwslin-archive',
//                   path: '/maintenance/mwslin-archive',
//                   Component: MaintenanceMwslinArchive
//                 }
//               ]
//             },
//             {
//               id: 'mwslin',
//               children: [
//                 {
//                   id: 'home',
//                   path: '/',
//                   Component: Home,
//                   loader: ({ params }) => homeLoader({ params, user: user.get() })
//                 },
//                 {
//                   id: 'mwslin-search',
//                   path: '/mwslin/search/sac?/:sac?/page?/:page?/size?/:size?/property?/:property?/filter?/:filter?',
//                   Component: Home,
//                   loader: ({ params }) => homeLoader({ params, user: user.get() })
//                 },
//                 {
//                   id: 'mwslin-new',
//                   path: '/mwslin/new',
//                   Component: MwslinNew,
//                   loader: ({ params }) => newMwslinLoader({ params, user: user.get() })
//                 },
//                 {
//                   id: 'mwslin-details',
//                   path: '/mwslin/:mwslinId',
//                   Component: MwslinDetails,
//                   loader: ({ params }) => mwslinDetailsLoader({ params }),
//                   action: mwslinDetailsAction
//                 },
//                 {
//                   id: 'change-request-details',
//                   path: '/mwslin/:mwslinId/changereq/:crId',
//                   Component: CrDetails
//                 },
//                 {
//                   id: 'change-request-new',
//                   path: '/mwslin/:mwslinId/changereq/new',
//                   Component: CrNew
//                 },
//                 {
//                   id: 'funding-document-details',
//                   path: '/mwslin/:mwslinId/fundingdoc/:fundId',
//                   Component: FdDetails
//                 },
//                 {
//                   id: 'funding-document-new',
//                   path: '/mwslin/:mwslinId/fundingdoc/new',
//                   Component: FdNew
//                 }
//               ]
//             },
//             {
//               id: 'reports',
//               element: (
//                 <RoleProtected permittedRoles={['SSAT']}>
//                   <Outlet />
//                 </RoleProtected>
//               ),
//               children: [
//                 {
//                   id: 'report-tamcn-summary',
//                   path: '/report/tamcn-summary',
//                   Component: TamcnSummary
//                 },
//                 {
//                   id: 'report-dser',
//                   path: '/report/dser',
//                   Component: Dser
//                 },
//                 {
//                   id: 'report-funding-adjustment',
//                   path: '/report/funding-adjustment',
//                   Component: FundingAdjustment
//                 },
//                 {
//                   id: 'report-change-request-list',
//                   path: '/report/change-request-list',
//                   Component: ChangeRequestList
//                 },
//                 {
//                   id: 'report-funding-document-list',
//                   path: '/report/funding-document-list',
//                   Component: FundingDocumentList
//                 },
//                 {
//                   id: 'report-funding-requirements',
//                   path: '/report/funding-requirements',
//                   Component: FundingRequirements
//                 }
//               ]
//             },
//             {
//               id: 'admin',
//               element: (
//                 <RoleProtected permittedRoles={['SSAT']}>
//                   <Outlet />
//                 </RoleProtected>
//               ),
//               children: [
//                 {
//                   id: 'admin-account-management',
//                   path: '/admin/account-management',
//                   Component: AccountManagement
//                 },
//                 {
//                   id: 'admin-file-management',
//                   path: '/admin/file-management',
//                   Component: FileManagement
//                 },
//                 {
//                   id: 'admin-system-configuration',
//                   path: '/admin/system-configuration',
//                   Component: SystemConfiguration
//                 },
//                 {
//                   id: 'admin-mwslin-archive',
//                   path: '/admin/mwslin-archive',
//                   Component: AdminMwslinArchive
//                 },
//                 {
//                   id: 'admin-send-email',
//                   path: '/admin/send-email',
//                   Component: SendEmail
//                 }
//               ]
//             },
//             {
//               id: 'help',
//               children: [
//                 {
//                   id: 'help-update-history',
//                   path: '/help/update-history',
//                   Component: UpdateHistory
//                 }
//               ]
//             },
//             {
//               id: 'under-maintenance',
//               path: '/under-maintenance',
//               element: <UnderMaintenance />
//             }
//           ]
//         },
//         {
//           id: 'account-request',
//           path: '/account-request',
//           element: (
//             <Layout>
//               <AccountRequest />
//             </Layout>
//           )
//         },
//         {
//           id: 'session-expired',
//           path: '/session-expired',
//           element: (
//             <Layout>
//               <SessionExpired />
//             </Layout>
//           )
//         },
//         {
//           id: 'error',
//           path: '/error',
//           element: (
//             <Layout>
//               <Error />
//             </Layout>
//           )
//         },
//         {
//           id: 'access-denied',
//           path: '/access-denied',
//           element: (
//             <Layout>
//               <AccessDenied />
//             </Layout>
//           )
//         },
//         {
//           id: '404',
//           path: '*',
//           element: <Navigate to="/" replace />
//         }
//       ]),
//     [user]
//   );

//   return (
//     <RouterProvider
//       router={router}
//       fallbackElement={
//         <div style={{ textAlign: 'center' }}>
//           <LinearProgress />
//         </div>
//       }
//     />
//   );
// }
