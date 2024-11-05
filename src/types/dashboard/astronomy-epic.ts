export interface AstronomyEpic {
    attitude_quaternions: { q0: number; q1: number; q2: number; q3: number };
    caption: string;
    centroid_coordinates: { lat: number; lon: number };
    coords: {
        attitude_quaternions: { q0: number; q1: number; q2: number; q3: number };
        centroid_coordinates: { lat: number; lon: number };
        dscovr_j2000_position: { x: number; y: number; z: number };
        lunar_j2000_position: { x: number; y: number; z: number };
        sun_j2000_position: { x: number; y: number; z: number };
    };
    date: string;
    dscovr_j2000_position: { x: number; y: number; z: number };
    identifier: string;
    image: string;
    lunar_j2000_position: { x: number; y: number; z: number };
    sun_j2000_position: { x: number; y: number; z: number };
    version: string;
}
