CREATE DATABASE cotripper;
CREATE USER cotripperuser WITH PASSWORD 'cotripper';
GRANT ALL PRIVILEGES ON DATABASE cotripper TO cotripperuser;

-- psql -U postgres -f settings.sql