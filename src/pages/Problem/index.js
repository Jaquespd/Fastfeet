import React, { useState, useMemo, useEffect } from 'react';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  setMilliseconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';
import {
  MdChevronLeft,
  MdChevronRight,
  MdMoreHoriz,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import api from '../../services/api';

import { Container, Time, List, NotificationList } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const [visible, setVisible] = useState(true);
  const [position, setPosition] = useState('20px');

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: { date },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map(hour => {
        const checkDate = setMilliseconds(
          setSeconds(setMinutes(setHours(date, hour), 0), 0),
          0
        );
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(a => {
            return isEqual(parseISO(a.date), compareDate);
          }),
        };
      });
      // console.log(data);
      setSchedule(data);
    }

    loadSchedule();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <h1>Problemas na entrega</h1>

      <table id="problems">
        <thead>
          <tr>
            <th>
              <strong> Encomenda</strong>
            </th>
            <th>
              <strong>Problema</strong>
            </th>
            <th>
              <strong>Ações</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Não havia ninguém em casa.</td>
            <td>
              <button onClick={handleToggleVisible} type="button">
                <MdMoreHoriz size={24} color="#C6C6C6" />
              </button>
              <NotificationList visible={visible}>
                <MdCreate size={10} color="#4D85EE" />
                <span>Vizualizar</span>
                <MdDeleteForever size={10} color="#DE3B3B" />
                <span>Cancelar</span>
              </NotificationList>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Houve um assalto e a encomenda foi roubada por meliantes</td>
            <td>
              <button onClick={handleToggleVisible} type="button">
                <MdMoreHoriz size={24} color="#C6C6C6" />
              </button>
            </td>
          </tr>
          <tr>
            <td>#03</td>
            <td>O endereço não existe</td>
            <td>
              <button onClick={handleToggleVisible} type="button">
                <MdMoreHoriz size={24} color="#C6C6C6" />
              </button>
            </td>
          </tr>
          <tr>
            <td>#04</td>
            <td>Não havia ninguém em casa.</td>
            <td>
              <button onClick={handleToggleVisible} type="button">
                <MdMoreHoriz size={24} color="#C6C6C6" />
              </button>
            </td>
          </tr>
          <tr>
            <td>#05</td>
            <td>Houve um assalto e a encomenda foi roubada por meliantes</td>
            <td>
              <button onClick={handleToggleVisible} type="button">
                <MdMoreHoriz size={24} color="#C6C6C6" />
              </button>
            </td>
          </tr>
          <tr>
            <td>#06</td>
            <td>O endereço não existe</td>
            <td>
              <button onClick={handleToggleVisible} type="button">
                <MdMoreHoriz size={24} color="#C6C6C6" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
