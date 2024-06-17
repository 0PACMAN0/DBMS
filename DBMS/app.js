const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const path = require('path');
const methodOverride = require('method-override');
const { pool, getEvents, getEvent, createEvent } = require('./database'); // Import pool and functions

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/events', async (req, res) => {
    try {
        const events = await getEvents();
        res.render('events/index', { events });
    } catch (err) {
        console.error("Error fetching events:", err);
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

app.get('/events/new', async (req, res) => {
    res.render('events/new');
});
app.post('/events', async (req, res) => {
    try {
        const eventData = {
            EventName: req.body.EventName,
            EventDate: req.body.EventDate,
            EventTime: req.body.EventTime,
            EventLocation: req.body.EventLocation,
            EventDescription: req.body.EventDescription,
            EventEligibility: req.body.EventEligibility,
            EventOrganiserName: req.body.EventOrganiserName || 'NOT SET',
            EventOrganiserEmail: req.body.EventOrganiserEmail || 'NOT SET'
        };
        const eventId = await createEvent(eventData);
        res.redirect(`/events/${eventId}`); // Redirect to event details page
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ error: 'Error creating event' });
    }
});
app.get('/events/:id', async (req, res) => {
    const eventId = req.params.id;
    try {
        const event = await getEvent(eventId);
        if (event.length === 0) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.render('events/show', { event: event[0] });
    } catch (err) {
        console.error("Error fetching event:", err);
        res.status(500).json({ error: "Error fetching event" });
    }
});

app.listen(3030, () => {
    console.log('Server is running on port 3030');
});
