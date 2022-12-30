import { Chrome } from 'components/Chrome';
import { SquirrelAvatar } from 'components/SquirrelAvatar';
import './Artists.scss';

export function Artists() {
  return (
    <Chrome>
      <div className="container artists">
        <h2>/artists</h2>
        <div className="members">
          {squirrelZoneI.map((member) => {
            return (
              <div className="member" key={member.name}>
                <SquirrelAvatar dna={member.dna} color={member.color} />
                <span className="member__name">{member.name}</span>
              </div>
            );
          })}
        </div>
        <p>JQ</p>
        <p>Nicky</p>
        <p>Robbie</p>
        <p>Sypher</p>
        <p>Nathan</p>
        <p>Fuduck</p>
        <p>Diana</p>
        <p>Olivia</p>
        <p>Ulla</p>
        <p>Brittany</p>
        <p>Tracy</p>
        <p>... Relevants contestants</p>
      </div>
    </Chrome>
  );
}

const squirrelZoneI = [
  {
    name: '3J',
    dna: '0:0:0:15:1:4:1:0:0:0:0:0:0:0:0:0:0:0',
    color: {
      hue: 0,
      saturation: 0,
      lightness: 50,
    },
  },
  {
    name: 'Leo',
    dna: '0:1:0:12:2:1:10:0:0:4:9:4:0:0:0:0:0:0',
    color: {
      hue: 0,
      saturation: 0,
      lightness: 50,
    },
  },
  {
    name: 'Bobak',
    dna: '0:3:0:0:0:9:11:0:0:3:4:2:0:0:0:0:0:0',
    color: {
      hue: 0,
      saturation: 0,
      lightness: 50,
    },
  },
  {
    name: 'Zachary',
    dna: '2:2:2:5:0:12:13:0:0:2:5:3:0:0:0:0:0:0',
    color: {
      hue: 0,
      saturation: 0,
      lightness: 50,
    },
  },
  {
    name: 'Bryan',
    dna: '1:2:1:0:4:6:5:0:0:1:10:1:0:0:0:0:0:0',
    color: {
      hue: 0,
      saturation: 0,
      lightness: 50,
    },
  },
];
