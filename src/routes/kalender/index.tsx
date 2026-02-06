import { createFileRoute } from "@tanstack/react-router";
import Calendar from "react-calendar";
import type { Value } from "react-calendar/dist/shared/types.js";
import "react-calendar/dist/Calendar.css";
import { useMemo, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { EVENTS, type ISODateString, type EventItem } from "@/data/events";

export const Route = createFileRoute("/kalender/")({
  component: RouteComponent,
});

function toISO(date: Date): ISODateString {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}` as ISODateString;
}
function parseISO(s: ISODateString): Date {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function RouteComponent() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const eventsByDay = useMemo(() => {
    const map = new Map<ISODateString, EventItem[]>();

    for (const e of EVENTS) {
      const start = parseISO(e.start);
      const end = parseISO(e.end ?? e.start);

      for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
        const key = toISO(dt);
        map.set(key, [...(map.get(key) ?? []), e]);
      }
    }
    return map;
  }, []);

  const selectedKey = toISO(selectedDate);
  const selectedEvents = eventsByDay.get(selectedKey) ?? [];

  return (
    <div className="main-container">
      <div className="top-image">
        <h1>Kalender</h1>
      </div>
      <div className="relative bg-[#e2d1b0] -mt-[60px] z-0 flex flex-col items-center">
        <div className="px-10 py-10 w-full max-w-[500px] flex flex-col items-center text-[#242424] text-center mb-14 mt-13">
          <h2 className="text-xl sm:text-3xl font-semibold font-['Cormorant_SC'] mb-2">
            Upplev Medeltiden med oss!
          </h2>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center px-6 pb-10">
          {/* Calendar column */}
          <div className="calendar calendar-theme w-full max-w-[420px]">
            <Calendar
              locale="sv-SE"
              value={selectedDate}
              onChange={(value: Value) => {
                if (value instanceof Date) setSelectedDate(value);
                else if (Array.isArray(value) && value[0] instanceof Date)
                  setSelectedDate(value[0]);
              }}
              tileClassName={({ date, view }) => {
                if (view !== "month") return null;
                return eventsByDay.has(toISO(date)) ? "has-event" : null;
              }}
              tileContent={({ date, view }) => {
                if (view !== "month") return null;
                return eventsByDay.has(toISO(date)) ? (
                  <div aria-label="Event day">⚔️</div>
                ) : null;
              }}
            />
          </div>

          {/* Event info column */}
          <div className="w-full max-w-[420px]">
            <h2 className="mb-3 text-xl font-semibold font-['Cormorant_SC'] text-[#242424]">
              Evenemang den{" "}
              {selectedDate.toLocaleDateString("sv-SE", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h2>

            {selectedEvents.length === 0 ? (
              <Card className="bg-[#f7ecd8] text-[#242424] shadow-lg border-2 border-[#1e325f]/35">
                <CardHeader>
                  <CardTitle className="text-lg font-['Cormorant_SC']">
                    Inga evenemang
                  </CardTitle>
                  <CardDescription className="text-[#242424]/80">
                    Det finns inga planerade evenemang för detta datum.
                  </CardDescription>
                </CardHeader>
              </Card>
            ) : (
              <Card className="bg-[#f7ecd8] text-[#242424] shadow-lg border-2 border-[#1e325f]/35">
                <CardHeader>
                  <CardTitle className="text-lg font-['Cormorant_SC']">
                    {selectedEvents[0].title}
                  </CardTitle>
                  {selectedEvents[0].location && (
                    <CardDescription className="text-[#242424]/80">
                      Plats: {selectedEvents[0].location}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="leading-relaxed">
                  {selectedEvents[0].description && (
                    <p>{selectedEvents[0].description}</p>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
