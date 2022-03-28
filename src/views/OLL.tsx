import { useState } from 'react'
import Illustration from '../components/Illustration/Illustration'
import Cube from '../components/Cube/Cube'

import './OLL.scss'
import Movement from '../components/Cube/Movement'

import NoCorners from './OLL/NoCorners'
import OneCorner from './OLL/OneCorner'
import TwoCorners from './OLL/TwoCorners'

const OLL = ({ trackPieces, darkMode }: { trackPieces: boolean; darkMode: boolean }) => {
  const [corners, setCorners] = useState(0)

  return (
    <main className="oll">
      <section className="intro side-margins">
        <h2 className="title">
          Orientation of Last Layer <p>(OLL)</p>
        </h2>

        <div style={{ opacity: '0.7', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          This tutorial assumes you always keep white on the bottom, however you{' '}
          <i>can</i> do the same moves with another color on the bottom - it might just
          make the illustrations a bit harder to follow.
        </div>

        <Illustration>
          <Cube className={`first dark-${darkMode}`} />
          <Cube className={`second dark-${darkMode}`} />
          <Cube className={`third dark-${darkMode}`} />
        </Illustration>

        <p className="description">
          Solving the white cross and F2L were a bit more intuitive,{' '}
          <b>now it's time for a lil more of an algorithm based approach</b>. OLL focuses
          on turning the top face of the cube into yellow, don't worry about the sides of
          the layer (unless specified) - we will get to them in the last step!
        </p>
      </section>

      <section className="cross" id="cross">
        <div className="intro-mini side-margins">
          <h3>The Cross</h3>

          <Illustration>
            <div className="movement">
              <p style={{ marginTop: '1rem' }} className="description">
                Dot
              </p>
              <Cube className="gray dot" />
            </div>
            <div className="movement">
              <p style={{ marginTop: '1rem' }} className="description">
                Line
              </p>
              <Cube className="gray line" />
            </div>
            <div className="movement">
              <p style={{ marginTop: '1rem' }} className="description">
                L-shape
              </p>
              <Cube className="gray l-shape" />
            </div>
            <p className="description">
              <b>If you have just the dot,</b> do the Line algorithm, which will actually
              give you an L-shape, and then do the L-shape algorithm.
            </p>
          </Illustration>
        </div>

        <h4 style={{ marginTop: '2rem' }} className="side-margins">
          If you have a Line shape..
        </h4>
        <Illustration className="case-line">
          <div className="movement">
            <p className="left">F</p>
            <Movement.F trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">R</p>
            <Movement.R trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">U</p>
            <Movement.U trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">R'</p>
            <Movement.Rprime trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">U'</p>
            <Movement.Uprime trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">F'</p>
            <Movement.Fprime trackPieces={trackPieces} />
          </div>
        </Illustration>

        <h4 style={{ marginTop: '2rem' }} className="side-margins">
          If you have an L shape..
        </h4>
        <Illustration className="case-l">
          <div className="movement">
            <p className="left">F</p>
            <Movement.F trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">R</p>
            <Movement.R trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">U</p>
            <Movement.U trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">R'</p>
            <Movement.Rprime trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">U'</p>
            <Movement.Uprime trackPieces={trackPieces} />
          </div>
          <div className="movement">
            <p className="left">F'</p>
            <Movement.Fprime trackPieces={trackPieces} />
          </div>
        </Illustration>
      </section>

      <section className="corners" id="corners">
        <div className="intro-mini side-margins">
          <h3>The Corners</h3>
          <div className="question">
            <h4>How many corners already have yellow facing up?</h4>
          </div>

          <Illustration className="pick-corners">
            <div
              tabIndex={0}
              className={`movement selected-${corners === 0}`}
              onClick={() => setCorners(0)}>
              <p>None</p>
              <Cube className="gray none" />
            </div>
            <div
              tabIndex={0}
              className={`movement selected-${corners === 1}`}
              onClick={() => setCorners(1)}>
              <p>1 Corner</p>
              <Cube className="gray one" />
            </div>
            <div
              tabIndex={0}
              className={`movement selected-${corners === 2}`}
              onClick={() => setCorners(2)}>
              <p>2 Corners</p>
              <Cube className="gray two" />
            </div>
          </Illustration>
        </div>

        {corners === 1 ? (
          <OneCorner trackPieces={trackPieces} />
        ) : corners === 2 ? (
          <TwoCorners trackPieces={trackPieces} />
        ) : (
          <NoCorners trackPieces={trackPieces} />
        )}
      </section>
    </main>
  )
}

export default OLL
