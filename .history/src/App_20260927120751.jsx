import { useState } from 'react'
import './App.css'

function App() {
  const [activeCrop, setActiveCrop] = useState('Maize')

  const crops = [
    {
      name: 'Maize',
      icon: '🌽',
      health: 'Healthy',
      moisture: '68%',
      growth: '82%',
    },
    {
      name: 'Beans',
      icon: '🌱',
      health: 'Good',
      moisture: '61%',
      growth: '74%',
    },
    {
      name: 'Tomatoes',
      icon: '🍅',
      health: 'Attention',
      moisture: '43%',
      growth: '58%',
    },
  ]

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span>🌱</span>
          Agri<span>Smart</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#crops">Crops</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#about">About</a>
        </div>

        <button className="nav-button">
          Get Started
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">

        <div className="hero-content">
          <div className="badge">
            🌿 Your Smart Farming Partner
          </div>

          <h1>
            Grow <span>Smarter.</span>
            <br />
            Grow Better.
          </h1>

          <p>
            AgriSmart uses modern technology and real-time
            farm data to help farmers make better decisions,
            increase productivity and grow healthier crops.
          </p>

          <div className="hero-buttons">
            <button className="primary-button">
              🌱 Monitor Crops
            </button>

            <button className="secondary-button">
              ▶ Watch Demo
            </button>
          </div>

          <div className="trusted">
            <div className="avatars">
              👨🏾‍🌾 👩🏾‍🌾 👨🏾‍🌾 👩🏾‍🌾
            </div>

            <p>
              Trusted by <strong>10,000+</strong> farmers
              <br />
              across the country
            </p>
          </div>
        </div>

        {/* HERO DASHBOARD */}
        <div className="hero-visual">

          <div className="farmland">
            <div className="farmer">
              👨🏾‍🌾
            </div>

            <div className="crop-row">
              🌱 🌱 🌱 🌱 🌱 🌱
            </div>

            <div className="soil-card">
              <span>💧</span>
              <div>
                <small>Soil Moisture</small>
                <strong>68%</strong>
                <em>Optimal</em>
              </div>
            </div>

            <div className="weather-card">
              <span>☀️</span>
              <div>
                <small>Weather</small>
                <strong>28°C</strong>
                <em>Sunny</em>
              </div>
            </div>

            <div className="health-card">
              <span>🌿</span>
              <div>
                <small>Crop Health</small>
                <strong>Good</strong>
                <em>No issues detected</em>
              </div>
            </div>

            <div className="rain-card">
              <span>🌧️</span>
              <div>
                <small>Rainfall Forecast</small>
                <strong>12mm</strong>
                <em>Next 24 hours</em>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* STATISTICS */}
      <section className="stats">

        <div className="stat">
          <div className="stat-icon">🌱</div>
          <div>
            <h3>10,000+</h3>
            <p>Active Farmers</p>
          </div>
        </div>

        <div className="stat">
          <div className="stat-icon">🌾</div>
          <div>
            <h3>25+</h3>
            <p>Crops Monitored</p>
          </div>
        </div>

        <div className="stat">
          <div className="stat-icon">📈</div>
          <div>
            <h3>35%</h3>
            <p>Average Yield Increase</p>
          </div>
        </div>

        <div className="stat">
          <div className="stat-icon">📡</div>
          <div>
            <h3>24/7</h3>
            <p>Real-time Monitoring</p>
          </div>
        </div>

      </section>

      {/* FEATURES */}
      <section className="features" id="features">

        <div className="section-title">
          <p>OUR SOLUTIONS</p>
          <h2>Smart Farming Solutions</h2>
          <span>
            Everything you need to manage your farm efficiently.
          </span>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">🌱</div>
            <h3>Crop Monitoring</h3>
            <p>
              Monitor crop health, soil moisture and
              environmental conditions in real time.
            </p>
            <a href="#crops">Learn more →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">☀️</div>
            <h3>Weather Updates</h3>
            <p>
              Get accurate weather information and alerts
              to plan your farming activities.
            </p>
            <a href="#dashboard">Learn more →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Analytics & Insights</h3>
            <p>
              Turn farm data into useful insights and
              recommendations for better decisions.
            </p>
            <a href="#dashboard">Learn more →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Expert Support</h3>
            <p>
              Connect with agricultural experts and get
              answers to your farming questions.
            </p>
            <a href="#about">Learn more →</a>
          </div>

        </div>
      </section>

      {/* CROP MONITORING */}
      <section className="crop-section" id="crops">

        <div className="section-title">
          <p>FARM MONITORING</p>
          <h2>Monitor Your Crops</h2>
          <span>
            Keep track of your crops and make better farming decisions.
          </span>
        </div>

        <div className="crop-grid">

          {crops.map((crop) => (
            <div
              className={`crop-card ${
                activeCrop === crop.name ? 'active' : ''
              }`}
              key={crop.name}
            >

              <div className="crop-header">
                <div className="crop-name">
                  <span>{crop.icon}</span>
                  <h3>{crop.name}</h3>
                </div>

                <span className="health">
                  {crop.health}
                </span>
              </div>

              <div className="crop-data">
                <div>
                  <small>Soil Moisture</small>
                  <strong>{crop.moisture}</strong>
                </div>

                <div>
                  <small>Growth</small>
                  <strong>{crop.growth}</strong>
                </div>
              </div>

              <div className="progress">
                <div
                  style={{ width: crop.growth }}
                ></div>
              </div>

              <button
                onClick={() => setActiveCrop(crop.name)}
              >
                Monitor {crop.name}
              </button>

            </div>
          ))}

        </div>

        <div className="monitoring">
          Currently monitoring:
          <strong>{activeCrop}</strong>
        </div>

      </section>

      {/* DASHBOARD */}
      <section className="dashboard-section" id="dashboard">

        <div className="dashboard-text">
          <p className="green-label">SMART DASHBOARD</p>

          <h2>
            Everything about your farm,
            <span> in one place.</span>
          </h2>

          <p>
            Get a clear picture of your farm's performance.
            Track soil moisture, crop health, weather and
            productivity from a single dashboard.
          </p>

          <ul>
            <li>✓ Real-time farm monitoring</li>
            <li>✓ Smart farming recommendations</li>
            <li>✓ Weather alerts</li>
            <li>✓ Crop health tracking</li>
            <li>✓ Farm performance analytics</li>
          </ul>

          <button className="primary-button">
            Open Dashboard →
          </button>
        </div>

        <div className="dashboard-card">

          <div className="dashboard-top">
            <div>
              <small>Farm Overview</small>
              <h3>My Maize Farm</h3>
            </div>

            <span>● Live</span>
          </div>

          <div className="dashboard-number">
            <small>Farm Health</small>
            <strong>82%</strong>
            <div className="big-progress">
              <div></div>
            </div>
          </div>

          <div className="dashboard-stats">

            <div>
              <span>💧</span>
              <small>Soil Moisture</small>
              <strong>68%</strong>
            </div>

            <div>
              <span>🌡️</span>
              <small>Temperature</small>
              <strong>28°C</strong>
            </div>

            <div>
              <span>💦</span>
              <small>Humidity</small>
              <strong>65%</strong>
            </div>

            <div>
              <span>🌧️</span>
              <small>Rainfall</small>
              <strong>12mm</strong>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="about">
        <div>
          <p>READY TO FARM SMARTER?</p>

          <h2>
            Let's grow a better future together.
          </h2>

          <span>
            Technology that puts better farming decisions
            right at your fingertips.
          </span>
        </div>

        <button>
          Get Started →
        </button>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="logo">
          <span>🌱</span>
          Agri<span>Smart</span>
        </div>

        <p>
          Smart technology for better farming.
        </p>

        <div>
          © 2026 AgriSmart
          Engineered by Ronald kiprotich
        </div>
      </footer>

    </div>
  )
}

export default App
