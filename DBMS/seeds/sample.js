// models.js

const Students = [
    {
        ID: 1,
        Name: "John Doe",
        Email: "john.doe@example.com",
        Phone: "123-456-7890",
        Gender: "Male"
    },
    {
        ID: 2,
        Name: "Jane Smith",
        Email: "jane.smith@example.com",
        Phone: "987-654-3210",
        Gender: "Female"
    },
    {
        ID: 3,
        Name: "Michael Johnson",
        Email: "michael.johnson@example.com",
        Phone: "555-123-4567",
        Gender: "Male"
    },
    {
        ID: 4,
        Name: "Emily Davis",
        Email: "emily.davis@example.com",
        Phone: "111-222-3333",
        Gender: "Female"
    },
    {
        ID: 5,
        Name: "David Brown",
        Email: "david.brown@example.com",
        Phone: "444-555-6666",
        Gender: "Male"
    },
    {
        ID: 6,
        Name: "Sophia Wilson",
        Email: "sophia.wilson@example.com",
        Phone: "777-888-9999",
        Gender: "Female"
    },
    {
        ID: 7,
        Name: "William Lee",
        Email: "william.lee@example.com",
        Phone: "333-444-7777",
        Gender: "Male"
    },
    {
        ID: 8,
        Name: "Olivia Taylor",
        Email: "olivia.taylor@example.com",
        Phone: "666-999-1111",
        Gender: "Female"
    }
];
const Events = [
    {
        ID: 1,
        EventName: "Tech Conference",
        EventDate: "2024-07-01",
        EventTime: "09:00:00",
        EventLocation: "Conference Hall A",
        EventDescription: "The Tech Conference is an annual gathering of technology leaders, innovators, and enthusiasts from around the globe. It features keynote speeches by industry pioneers, in-depth technical sessions, and hands-on workshops covering the latest trends in artificial intelligence, blockchain, cybersecurity, and more. Attendees will have the opportunity to network with peers, explore cutting-edge technologies, and gain insights that drive business and innovation forward.",
        EventEligibility: "Open to all students and professionals interested in technology",
        EventOrganiserID: 1,
        EventOrganiserName: "John Doe",
        EventOrganiserEmail: "john.doe@example.com"
    },
    {
        ID: 2,
        EventName: "Music Festival",
        EventDate: "2024-08-15",
        EventTime: "18:00:00",
        EventLocation: "Main Stage",
        EventDescription: "The Music Festival is a spectacular celebration of music and culture, attracting music enthusiasts from far and wide. This year’s lineup includes a diverse array of artists spanning genres such as rock, pop, hip-hop, and electronic music. Attendees can expect electrifying performances, immersive art installations, and a vibrant atmosphere filled with creativity and community spirit. Whether you’re a die-hard music fan or simply looking to experience something unforgettable, join us for an epic journey through sound and rhythm.",
        EventEligibility: "Open to all music enthusiasts and festival-goers",
        EventOrganiserID: 2,
        EventOrganiserName: "Jane Smith",
        EventOrganiserEmail: "jane.smith@example.com"
    },
    {
        ID: 3,
        EventName: "Career Fair",
        EventDate: "2024-09-20",
        EventTime: "10:00:00",
        EventLocation: "Exhibition Center",
        EventDescription: "The Career Fair is a premier event for students and professionals seeking career opportunities and professional growth. It brings together top employers, recruiters, and industry leaders offering internships, full-time positions, and career advancement opportunities across various fields. Participants can engage in networking sessions, attend career workshops, and gain valuable insights into the job market. Whether you’re a recent graduate or seasoned professional, the Career Fair is your gateway to a successful career path.",
        EventEligibility: "Open to graduating students, recent graduates, and professionals seeking career opportunities",
        EventOrganiserID: 3,
        EventOrganiserName: "Michael Johnson",
        EventOrganiserEmail: "michael.johnson@example.com"
    },
    {
        ID: 4,
        EventName: "Art Exhibition",
        EventDate: "2024-10-05",
        EventTime: "11:00:00",
        EventLocation: "Art Gallery",
        EventDescription: "The Art Exhibition showcases the creativity and talent of local artists through a diverse collection of artworks. From paintings and sculptures to multimedia installations, this exhibition offers a captivating journey into the world of contemporary art. Attendees can explore different artistic styles, interact with artists, and purchase unique pieces to enrich their personal collections. Whether you’re an art enthusiast, collector, or simply curious about visual expression, join us for an inspiring celebration of creativity and culture.",
        EventEligibility: "Open to art enthusiasts, collectors, and anyone interested in visual arts",
        EventOrganiserID: 4,
        EventOrganiserName: "Emily Davis",
        EventOrganiserEmail: "emily.davis@example.com"
    },
    {
        ID: 5,
        EventName: "Sports Tournament",
        EventDate: "2024-11-15",
        EventTime: "14:00:00",
        EventLocation: "Stadium",
        EventDescription: "The Sports Tournament is an adrenaline-pumping competition featuring a wide range of athletic disciplines. Participants can showcase their skills in sports such as soccer, basketball, tennis, and more, competing against fellow athletes in a spirited atmosphere. Spectators can cheer on their favorite teams, enjoy thrilling matches, and experience the camaraderie of sportsmanship. Whether you’re a seasoned athlete or enthusiastic fan, join us for a day of competitive spirit and sporting excellence.",
        EventEligibility: "Open to sports enthusiasts, athletes, and spectators",
        EventOrganiserID: 5,
        EventOrganiserName: "David Brown",
        EventOrganiserEmail: "david.brown@example.com"
    },
    {
        ID: 6,
        EventName: "Science Symposium",
        EventDate: "2024-12-10",
        EventTime: "08:30:00",
        EventLocation: "Science Center",
        EventDescription: "The Science Symposium is a prestigious event that highlights groundbreaking scientific research and discoveries. Leading scientists, researchers, and educators gather to present their findings and engage in discussions on topics ranging from biology and chemistry to physics and environmental science. Participants can explore cutting-edge innovations, attend informative lectures, and participate in hands-on demonstrations that inspire curiosity and advance scientific knowledge.",
        EventEligibility: "Open to science students, researchers, and anyone interested in scientific advancements",
        EventOrganiserID: 6,
        EventOrganiserName: "Sophia Wilson",
        EventOrganiserEmail: "sophia.wilson@example.com"
    },
    {
        ID: 7,
        EventName: "Food Festival",
        EventDate: "2024-10-20",
        EventTime: "12:00:00",
        EventLocation: "Park",
        EventDescription: "The Food Festival invites food enthusiasts on a culinary journey showcasing flavors from around the world. Attendees can indulge in a variety of cuisines, from gourmet dishes to street food delights, prepared by local chefs and vendors. The festival atmosphere is enriched with live cooking demonstrations, culinary workshops, and family-friendly activities that celebrate the diversity of global cuisine. Whether you’re a connoisseur or simply love good food, join us for a deliciously memorable experience.",
        EventEligibility: "Open to food enthusiasts, culinary explorers, and families",
        EventOrganiserID: 7,
        EventOrganiserName: "William Lee",
        EventOrganiserEmail: "william.lee@example.com"
    },
    {
        ID: 8,
        EventName: "Book Fair",
        EventDate: "2024-11-30",
        EventTime: "10:30:00",
        EventLocation: "Library",
        EventDescription: "The Book Fair celebrates the written word with an extensive collection of books from local and international authors. Attendees can browse through genres such as fiction, non-fiction, children’s literature, and more, discovering new stories and timeless classics. Engage in author signings, literary discussions, and book-related activities that inspire a love for reading and storytelling. Whether you’re a book lover, aspiring writer, or literary enthusiast, join us for an enriching celebration of literature and imagination.",
        EventEligibility: "Open to book lovers, readers, and anyone passionate about literature",
        EventOrganiserID: 8,
        EventOrganiserName: "Olivia Taylor",
        EventOrganiserEmail: "olivia.taylor@example.com"
    }
];



module.exports = {
    Students,
    Events
};
