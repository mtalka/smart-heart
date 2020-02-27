const initialState = {
    persons: [
        {
            id: "e3f83010-94cb-4e72-8886-9a9edf8f0477",
            firstName: "Bertha",
            lastName: "Alexander",
            gender: "female",
            company: "EXTREMO",
            email: "berthaalexander@extremo.com",
            phone: "040(963) 400-3561",
            city: "Clarence",
            school: "School of Hard Knocks",
            about:
                "Culpa aliquip esse ea laborum amet deserunt. Incididunt esse dolor labore amet irure elit nulla adipisicing nisi reprehenderit fugiat ullamco proident. Eiusmod velit quis exercitation sunt amet in. Nulla ex commodo ut mollit fugiat occaecat. Occaecat incididunt velit do proident do irure ea dolor adipisicing. Non officia enim reprehenderit et ut commodo est incididunt excepteur ea sint id exercitation in.\r\n",
            birthDate: "1980-08-28T09:31:35 -02:00",
            registeredDate: "2017-01-15T06:50:09 -02:00",
            latitude: 61.20359,
            longitude: 24.406497,
            criteria: ["officia", "sunt", "amet", "minim", "pariatur"],
            matches: [
                {
                    id: "90c263a1-5d06-47b8-8f1e-6e2b6b18f818"
                },
                {
                    id: "64526311-7d1b-43ee-8952-985e0e84971d"
                },
                {
                    id: "43723ea6-b0d5-4982-978a-968745b3569b"
                }
            ]
        },
        {
            id: "8f205b72-4346-447b-a086-d59863079f4f",
            firstName: "Annabelle",
            lastName: "Coleman",
            gender: "female",
            company: "IMANT",
            email: "annabellecoleman@imant.com",
            phone: "040(890) 451-3361",
            city: "Thermal",
            school: "School of Hard Knocks",
            about:
                "Adipisicing elit cupidatat est quis labore occaecat eu eiusmod. Lorem laborum sunt consectetur consequat nulla labore excepteur exercitation minim. Duis labore voluptate enim velit id nisi enim. Sit ullamco pariatur Lorem dolor aliqua duis aute. Mollit minim veniam id tempor ullamco officia amet eu velit. Sint mollit fugiat deserunt nostrud et proident.\r\n",
            birthDate: "1997-10-13T03:37:18 -03:00",
            registeredDate: "2015-04-03T08:32:11 -03:00",
            latitude: 60.100841,
            longitude: 25.310357,
            criteria: ["qui", "incididunt", "non", "sunt", "cillum"],
            matches: [
                {
                    id: "7e3e4e50-55d6-4124-9d8e-105f290203cc"
                },
                {
                    id: "42f0c121-b77e-42e1-8e5b-12a3e215c89c"
                },
                {
                    id: "a40068bc-e6ef-4b46-9cd1-0f18abfaf6a1"
                }
            ]
        }
    ]
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PERSONS":
            console.log("getteded");
            return null;
        default:
            return state;
    }
}
