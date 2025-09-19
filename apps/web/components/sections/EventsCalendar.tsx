import { events } from "../../lib/mockData";
import { GlowSectionHeading } from "../ui/GlowSectionHeading";

function getMonthMatrix(date: Date) {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const startWeekday = firstDay.getDay();
  const daysInMonth = lastDay.getDate();

  const days: Array<{ date: Date | null }> = [];
  for (let i = 0; i < startWeekday; i += 1) {
    days.push({ date: null });
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    days.push({ date: new Date(date.getFullYear(), date.getMonth(), day) });
  }
  while (days.length % 7 !== 0) {
    days.push({ date: null });
  }
  return days;
}

export function EventsCalendar() {
  const referenceDate = new Date();
  const monthDays = getMonthMatrix(referenceDate);

  const eventsByDay = new Map<string, typeof events[number]>();
  events.forEach((event) => {
    const eventDate = new Date(event.date);
    if (eventDate.getMonth() === referenceDate.getMonth() && eventDate.getFullYear() === referenceDate.getFullYear()) {
      eventsByDay.set(eventDate.toDateString(), event);
    }
  });

  const monthName = referenceDate.toLocaleString("en-US", { month: "long", year: "numeric" });
  const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <section id="events" className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div>
        <GlowSectionHeading
          superTitle="Events"
          title="Glow City Calendar"
          description="Pop-ups, takeovers, and partner activations happening this month."
        />
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">{monthName}</h3>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">On air &amp; on ground</span>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-xs text-white/50">
            {weekdayLabels.map((day) => (
              <div key={day} className="py-1 font-semibold uppercase tracking-widest">
                {day}
              </div>
            ))}
            {monthDays.map(({ date }, index) => {
              if (!date) {
                return <div key={`empty-${index}`} className="h-12 rounded-xl border border-dashed border-white/5" />;
              }
              const isToday = date.toDateString() === new Date().toDateString();
              const event = eventsByDay.get(date.toDateString());
              return (
                <div
                  key={date.toISOString()}
                  className={`relative flex h-12 items-center justify-center rounded-xl border border-white/10 ${
                    event ? "bg-glow-primary/20 text-glow-primary" : "bg-white/5 text-white"
                  } ${isToday ? "ring-2 ring-glow-primary/60" : ""}`}
                >
                  <span className="text-sm font-semibold">{date.getDate()}</span>
                  {event && <span className="absolute bottom-1 text-[10px] uppercase text-glow-primary/80">Event</span>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-white">Upcoming Highlights</h3>
        <ul className="space-y-3">
          {events.map((event) => {
            const date = new Date(event.date);
            return (
              <li key={event.id} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  {date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                </p>
                <p className="text-base font-semibold text-white">{event.title}</p>
                <p className="text-sm text-white/60">{event.location}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

