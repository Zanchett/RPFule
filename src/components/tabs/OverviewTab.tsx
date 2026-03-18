import {
  TextInput,
  Select,
  Textarea,
  Box,
  Title,
  Stack,
  SimpleGrid,
  MultiSelect
} from '@mantine/core'
import { useCharacterStore } from '../../stores/characterStore'

const ALIGNMENTS = [
  'Lawful Good',
  'Neutral Good',
  'Chaotic Good',
  'Lawful Neutral',
  'True Neutral',
  'Chaotic Neutral',
  'Lawful Evil',
  'Neutral Evil',
  'Chaotic Evil'
]

const COMMON_DEITIES = [
  'Abadar',
  'Calistria',
  'Cayden Cailean',
  'Desna',
  'Erastil',
  'Gorum',
  'Gozreh',
  'Iomedae',
  'Irori',
  'Lamashtu',
  'Nethys',
  'Norgorber',
  'Pharasma',
  'Rovagug',
  'Sarenrae',
  'Shelyn',
  'Torag',
  'Urgathoa',
  'Zon-Kuthon',
  'None'
]

const LANGUAGES = [
  'Common',
  'Draconic',
  'Dwarven',
  'Elven',
  'Gnomish',
  'Goblin',
  'Halfling',
  'Jotun',
  'Orcish',
  'Sylvan',
  'Undercommon',
  'Abyssal',
  'Celestial',
  'Infernal',
  'Necril',
  'Shadowtongue'
]

export function OverviewTab(): JSX.Element {
  const { character, setName, setAlignment, setDeity, setLanguages, setNotes } =
    useCharacterStore()

  if (!character) return <></>

  const sectionStyle = {
    background: 'linear-gradient(145deg, #241c14 0%, #1e1610 100%)',
    border: '1px solid #4a3828',
    padding: 20
  }

  return (
    <Stack gap="md">
      <Title
        order={3}
        style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a' }}
      >
        Character Details
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Box style={sectionStyle}>
          <Stack gap="md">
            <Title
              order={5}
              style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}
            >
              Identity
            </Title>
            <TextInput
              label="Character Name"
              placeholder="Enter character name"
              value={character.name}
              onChange={(e) => setName(e.target.value)}
              size="md"
            />
            <Select
              label="Alignment"
              placeholder="Choose alignment"
              data={ALIGNMENTS}
              value={character.alignment || null}
              onChange={(val) => setAlignment(val ?? '')}
            />
            <Select
              label="Deity"
              placeholder="Choose deity"
              data={COMMON_DEITIES}
              value={character.deity || null}
              onChange={(val) => setDeity(val ?? '')}
              searchable
            />
          </Stack>
        </Box>

        <Box style={sectionStyle}>
          <Stack gap="md">
            <Title
              order={5}
              style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}
            >
              Languages
            </Title>
            <MultiSelect
              label="Known Languages"
              placeholder="Select languages"
              data={LANGUAGES}
              value={character.languages}
              onChange={setLanguages}
              searchable
            />
            <Textarea
              label="Notes"
              placeholder="Character backstory, personality traits, goals..."
              value={character.notes}
              onChange={(e) => setNotes(e.target.value)}
              minRows={5}
              autosize
            />
          </Stack>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}
