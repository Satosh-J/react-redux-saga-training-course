import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
    {
        "field": "id",
        "hide": true
    },
    {
        "field": "userId",
        "headerName": "User Id",
        "sortable": true,
        "filterable": true,
        "groupable": false,
        "hide": true
    },
    {
        "field": "name",
        "headerName": "Name",
        "dataGeneratorUniquenessEnabled": true,
        "width": 120,
        "editable": true,
        "groupable": false,
        "aggregable": false
    },
    {
        "field": "website",
        "headerName": "Website",
        "width": 160,
        "editable": true,
        "groupable": false,
        "aggregable": false,
        "hide": true
    },
    {
        "field": "email",
        "headerName": "Email",
        "width": 150,
        "editable": true,
        "hide": true
    },
    {
        "field": "phone",
        "headerName": "Phone",
        "width": 150,
        "editable": true,
        "hide": true
    },
    {
        "field": "username",
        "headerName": "Username",
        "width": 150,
        "editable": true,
        "hide": true
    },
    {
        "field": "city",
        "headerName": "City",
        "editable": true,
        "hide": true
    },
    {
        "field": "company",
        "headerName": "Company",
        "width": 180,
        "editable": true,
        "hide": true
    },
    {
        "field": "position",
        "headerName": "Position",
        "width": 180,
        "editable": true,
        "hide": true
    },
    {
        "field": "lastUpdated",
        "headerName": "Updated on",
        "type": "dateTime",
        "width": 180,
        "editable": true,
        "hide": true
    },
    {
        "field": "dateCreated",
        "headerName": "Created on",
        "type": "date",
        "width": 120,
        "editable": true
    },
    {
        "field": "isAdmin",
        "headerName": "Is admin?",
        "type": "boolean",
        "width": 150,
        "editable": true
    },
    {
        "field": "salary",
        "headerName": "Salary",
        "type": "number",
        "hide": true
    }
]

const rows = [
    {
        "id": "29b52d86-ed8d-5e79-a99d-17a90b8bf491",
        "userId": "f44336",
        "name": "Helena Ray",
        "website": "http://zuh.jo/vurvan",
        "email": "nokos@aznajas.ch",
        "phone": "(706) 466-8597",
        "username": "@tifcisak",
        "city": "Veoditu",
        "company": "Clear Channel Communications Inc.",
        "position": "Internal Controls Director",
        "lastUpdated": new Date("2023-09-29T12:38:05.574Z"),
        "dateCreated": new Date("2022-11-21T01:59:07.985Z"),
        "isAdmin": false,
        "salary": 47637
    },
    {
        "id": "9984996e-6b62-5540-8217-0f0622c54173",
        "userId": "9c27b0",
        "name": "Billy Oliver",
        "website": "http://le.mt/ro",
        "email": "budohova@hi.mt",
        "phone": "(403) 291-8348",
        "username": "@gasikero",
        "city": "Fijogi",
        "company": "Barnes & Noble, Inc.",
        "position": "Biologist",
        "lastUpdated": new Date("2023-09-29T12:38:05.574Z"),
        "dateCreated": new Date("2022-11-21T01:59:07.985Z"),
        "isAdmin": true,
        "salary": 79818
    },
    {
        "id": "152ee733-a30d-5a69-9652-54e34100dde1",
        "userId": "f44336",
        "name": "Roy Gardner",
        "website": "http://et.sd/bebfe",
        "email": "regvifec@peducaza.mm",
        "phone": "(730) 572-7902",
        "username": "@biwuwiz",
        "city": "Seoraga",
        "company": "Union Planters Corp",
        "position": "Sales Manager",
        "lastUpdated": new Date("2023-09-29T12:38:05.574Z"),
        "dateCreated": new Date("2022-11-21T01:59:07.985Z"),
        "isAdmin": false,
        "salary": 38848
    },
    {
        "id": "b57421d1-1423-555d-b08c-07dfb1ab0f30",
        "userId": "9c27b0",
        "name": "Rose Simon",
        "website": "http://he.io/fofco",
        "email": "felpigur@iguwuw.bo",
        "phone": "(559) 323-8706",
        "username": "@jun",
        "city": "Tovade",
        "company": "American International Group, Inc.",
        "position": "Investment Manager",
        "lastUpdated": new Date("2023-09-29T12:38:05.574Z"),
        "dateCreated": new Date("2022-11-21T01:59:07.985Z"),
        "isAdmin": false,
        "salary": 65294
    },
    {
        "id": "7a209156-0dab-52cd-a845-c404fe8b7a27",
        "userId": "f44336",
        "name": "Bruce Roy",
        "website": "http://conoro.sj/hoha",
        "email": "va@fir.mk",
        "phone": "(464) 648-4627",
        "username": "@bocub",
        "city": "Colgegwoz",
        "company": "Rock-Tenn Co",
        "position": "Glamour Photographer",
        "lastUpdated": new Date("2023-09-29T12:38:05.574Z"),
        "dateCreated": new Date("2022-11-21T01:59:07.985Z"),
        "isAdmin": true,
        "salary": 31005
    },
    {
        "id": "e92b6f58-f6c7-5834-9f66-67cb4faddbf0",
        "userId": "9c27b0",
        "name": "Georgie Stevenson",
        "website": "http://sorjarwet.mp/lu",
        "email": "afori@me.si",
        "phone": "(255) 411-6175",
        "username": "@mo",
        "city": "Cimacgiz",
        "company": "Owens Corning",
        "position": "Sales Manager",
        "lastUpdated": new Date("2023-09-29T12:38:05.574Z"),
        "dateCreated": new Date("2022-11-21T01:59:07.985Z"),
        "isAdmin": true,
        "salary": 35867
    },
    {
        "id": "3594172c-c565-5bca-b0de-836e6690c124",
        "userId": "ff9800",
        "name": "Martha Ramos",
        "website": "http://wejuhfa.gr/jobeh",
        "email": "geksilfe@anofu.at",
        "phone": "(844) 563-4223",
        "username": "@titemaci",
        "city": "Nukjahbuc",
        "company": "US Airways Group Inc",
        "position": "Research Specialist",
        "lastUpdated": new Date("2023-09-29T12:38:05.574Z"),
        "dateCreated": new Date("2022-11-21T01:59:07.985Z"),
        "isAdmin": true,
        "salary": 74830
    },
    {
        "id": "29f21b51-2de8-5879-8d0b-cabc97c54de3af",
        "userId": "2196f3",
        "name": "Steven Ryan",
        "website": "http://zo.cz/duci",
        "email": "zab@nuutlic.bt",
        "phone": "(379) 638-2261",
        "username": "@zedvetu",
        "city": "Rebwalal",
        "company": "Bristol-Myers Squibb Company",
        "position": "MIS Manager",
        "lastUpdated": new Date("2023-09-29T12:38:05.564Z"),
        "dateCreated": new Date("2022-11-21T01:59:07.925Z"),
        "isAdmin": false,
        "salary": 54626
    }
]

export default function UsersList() {
    return (
        <Box sx={{ width: 1 }}>
            <DataGrid
                // {...data}
                rows={rows}
                columns={columns}
                // disableColumnFilter
                // disableColumnSelector
                disableDensitySelector
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,

                    },
                }}
            />
        </Box >
    );
}
