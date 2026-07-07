import { certifications } from "./certifications";

export const roadmapData = [...certifications]

    .sort((a, b) => Number(b.year) - Number(a.year))

    .map((certificate, index) => ({

        id: certificate.id,

        index,

        year: certificate.year,

        title: certificate.title,

        issuer: certificate.issuer,

        certificate: certificate.certificate,

        featured: certificate.featured,

    }));