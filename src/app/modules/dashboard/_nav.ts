import NavLink from "./models/NavLink.model";

export const navLinks :NavLink [] =[
    {
        label: 'Dashboard',
        icon: 'ti-home',
        path:'dashboard',
        subLinks:[]
    },
    {
        label: 'User Management',
        icon: 'ti-user',
        subLinks:[
            {
                label: 'Create User',
                icon: '',
                path:'dashboard/users/register',
                subLinks:[]
            },
            {
                label: 'List User',
                icon: '',
                path:'dashboard/users',
                subLinks:[]
            }

        ]
    },
    {
        label: 'Group',
        icon: 'ti-package',
        path:'/dashboard/groups',
        subLinks:[ ]
    }

]