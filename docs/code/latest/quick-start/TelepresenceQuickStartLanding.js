import { Link } from 'gatsby';
import React from 'react';

import Icon from '../../../../../src/components/Icon';

import './telepresence-quickstart-landing.less';

/** @type React.FC<React.SVGProps<SVGSVGElement>> */
const RightArrow = (props) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.4 4.5A1.1 1.1 0 0 0 11.8 6l4.8 4.9h-12a1.1 1.1 0 0 0 0 2.2h12L11.8 18a1.1 1.1 0 0 0 1.6 1.5l6.7-6.7c.4-.4.4-1.2 0-1.6l-6.7-6.7Z" />
  </svg>
);

const TelepresenceQuickStartLanding = () => (
  <div className="telepresence-quickstart-landing">
    <h1>
      <Icon name="telepresence-icon" /> Telepresence
    </h1>
    <p>
      Set up your ideal development environment for Kubernetes in seconds.
      Accelerate your inner development loop with hot reload using your existing
      IDE, and workflow.
    </p>

    <div className="demo-cluster-container">
      <div>
        <div className="box-container">
          <h2>
            <strong>Set Up Telepresence with Ambassador Cloud</strong>
          </h2>
          <p>
            Seamlessly integrate Telepresence into your existing Kubernetes
            environment by following our 3-step setup guide.
          </p>
          <Link
            to="https://app.getambassador.io/cloud/welcome?docs_source=telepresence-quick-start"
            className="docs__button-secondary blue "
          >
            Get Started
          </Link>
        </div>
      </div>
      <p>
        <Link
          className="get-started blue inline"
          to="/docs/telepresence/latest/howtos/intercepts/"
        >
          Do it Yourself:
        </Link>{' '}
        install Telepresence and manually connect to your Kubernetes workloads.
      </p>
    </div>

    <div className="telepresence-video">
      <div className="video-section">
        <div>
          <h2 className="telepresence-video-title">
            What Can Telepresence Do for You?
          </h2>
          <p>Telepresence gives Kubernetes application developers:</p>
          <ul>
            <li>Instant feedback loops</li>
            <li>Remote development environments</li>
            <li>Access to your favorite local tools</li>
            <li>Easy collaborative development with teammates</li>
          </ul>
          <Link className="learn-more blue" to="/products/telepresence">
            LEARN MORE <RightArrow width={24} height={24} fill="currentColor" />
          </Link>
        </div>
        <div className="video-container">
          <iframe
            title="Telepresence Demo"
            src="https://www.youtube.com/embed/pfLtYyrWUg0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
);

export default TelepresenceQuickStartLanding;