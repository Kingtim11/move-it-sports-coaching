import React from 'react';

export default function Timetable() {
  return (
    <table className='timetable'>
      <thead>
        <tr>
            <th>Time</th>
            <th>EYFS & KS1 Groups</th>
            <th>KS2 Groups</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>8:15 AM</td>
            <td colSpan={2}>
            Gates open for 'Extended Day'<br />
            <p>A wide range of sports equipment available for children to play with.</p>
            </td>
        </tr>

        <tr>
            <td>8:45 AM - 9:15 AM</td>
            <td colSpan={2}>
                Gates open for all<br />
                <p>Arrival games.</p>
            </td>
        </tr>

        <tr>
            <td>9:15 AM - 10:30 AM</td>
            <td colSpan={2}>
                Session 1<br />
                <p>A range of running, tagging, dodging and ball games.</p>
            </td>
        </tr>

        <tr>
            <td>10:30 AM - 10:50 AM</td>
            <td colSpan={2}>
                Snack time
            </td>
        </tr>

        <tr>
            <td>10:50 AM - 12:00 PM</td>
            <td colSpan={2}>
                Session 2<br />
                <p>A range of running, tagging, dodging and ball games.</p>
            </td>
        </tr>
        
        <tr>
            <td>12:00 PM - 12:45 PM</td>
            <td colSpan={2}>
                Lunch<br />
                <p>A wide range of sports equipment available for children to play with.</p>
            </td>
        </tr>

        <tr>
            <td>12:45 PM - 1:00 PM</td>
            <td>Leisure Area</td>
            <td>Gymnastics</td>
        </tr>

        <tr>
            <td>1:00 PM - 1:45 PM</td>
            <td>
                Session 3<br />
                <p>Child-led / A range of running, tagging, dodging and ball games.</p>
            </td>
            <td>
                <p>Gymnastics</p>
            </td>
        </tr>

        <tr>
            <td>1:45 PM - 2:45 PM</td>
            <td>
                <p>Gymnastics</p>
            </td>

            <td>
                Session 3<br />
                <p>Child-led / A range of running, tagging, dodging and ball games.</p>
            </td>
        </tr>

        <tr>
            <td>2:45 PM - 3:00 PM</td>
            <td colSpan={2}>
                Prepare for collection.
            </td>
        </tr>

        <tr>
            <td>2:45 PM - 3:45 PM</td>
            <td colSpan={2}>
                Extended day only:<br />
                <p>A wide range of sports equipment available for children to play with.</p>
            </td>
        </tr>
        
      </tbody>
    </table>
  );
}