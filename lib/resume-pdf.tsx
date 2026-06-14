import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import {
  personalInfo,
  aboutSummary,
  competencies,
  certifications,
  experience,
  education,
  technicalSkills,
  additionalQualifications,
} from "./resume-data";

const styles = StyleSheet.create({
  page: {
    padding: 48,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: "#171717",
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#d4d4d4",
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1,
    marginBottom: 6,
  },
  contact: {
    fontSize: 9,
    color: "#525252",
    marginBottom: 2,
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: "#e5e5e5",
    color: "#404040",
  },
  bodyText: {
    fontSize: 9.5,
    color: "#404040",
    textAlign: "justify",
  },
  jobTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    marginBottom: 2,
  },
  jobMeta: {
    fontSize: 9,
    color: "#737373",
    marginBottom: 6,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 3,
    paddingRight: 8,
  },
  bullet: {
    width: 8,
    fontSize: 9,
    color: "#737373",
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    color: "#404040",
  },
  twoCol: {
    flexDirection: "row",
    gap: 16,
  },
  col: {
    flex: 1,
  },
  certItem: {
    marginBottom: 4,
    fontSize: 9,
    color: "#404040",
  },
});

function BulletList({ items }: { items: string[] }) {
  return (
    <View>
      {items.map((item) => (
        <View key={item} style={styles.bulletRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

function TwoColumnBullets({ items }: { items: string[] }) {
  const midpoint = Math.ceil(items.length / 2);
  const left = items.slice(0, midpoint);
  const right = items.slice(midpoint);

  return (
    <View style={styles.twoCol}>
      <View style={styles.col}>
        <BulletList items={left} />
      </View>
      <View style={styles.col}>
        <BulletList items={right} />
      </View>
    </View>
  );
}

export function ResumePDFDocument() {
  return (
    <Document
      title={`${personalInfo.name} - Resume`}
      author={personalInfo.name}
    >
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.contact}>{personalInfo.location}</Text>
          <Text style={styles.contact}>
            {personalInfo.phone} · {personalInfo.email}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.bodyText}>{aboutSummary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Core Competencies</Text>
          <TwoColumnBullets items={competencies} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {experience.map((job) => (
            <View key={job.company} style={{ marginBottom: 10 }}>
              <Text style={styles.jobTitle}>{job.role}</Text>
              <Text style={styles.jobMeta}>
                {job.company} | {job.period}
              </Text>
              <BulletList items={job.bullets} />
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          {certifications.map((cert) => (
            <Text key={cert.name} style={styles.certItem}>
              • {cert.name}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={styles.jobTitle}>{education.title}</Text>
          <Text style={styles.jobMeta}>{education.subtitle}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <TwoColumnBullets items={technicalSkills} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Qualifications</Text>
          <BulletList items={additionalQualifications} />
        </View>
      </Page>
    </Document>
  );
}
