import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ArrowForwardIcon,
} from '@chakra-ui/icons';
import { Link as RouteLink } from 'react-router-dom';

import { NAV_ITEMS } from 'components/navbar/NAV_ITEMS';

const LogoIcon = props => (
  <Icon viewBox="0 0 463 112" {...props}>
    <g clip-path="url(#clip0)">
      <path
        d="M127.127 98.9005V14.7047H150.449V98.9005H127.127Z"
        fill="#295FA3"
      />
      <path
        d="M162.689 98.9005V14.7047H226.824V31.0276H186.009V48.4021H223.556V64.7297H186.009V82.5683H226.824V98.9005H162.689"
        fill="#295FA3"
      />
      <path
        d="M239.892 98.9005V14.7047H304.011V31.0276H263.207V48.4021H300.741V64.7297H263.207V82.5683H304.011V98.9005H239.892Z"
        fill="#295FA3"
      />
      <path
        d="M317.069 98.9005V14.7047H381.205V31.0276H340.405V48.4021H377.941V64.7297H340.405V82.5683H381.205V98.9005H317.069Z"
        fill="#295FA3"
      />
      <path
        d="M53.2035 65.2506C52.8947 71.1959 52.8191 76.6974 52.3801 82.6583C54.7322 82.8714 57.3879 83.0771 59.8967 82.7115L59.1478 66.097L59.0166 65.3068C57.1051 65.3807 55.2967 65.4579 53.2035 65.2506ZM38.5078 48.5558C35.6098 50.0088 31.3463 52.2042 31.8155 56.1798C32.4369 58.3495 34.7863 59.7522 36.6458 60.6454C46.9245 65.1724 60.5697 65.3271 71.4229 61.9474C74.1015 60.9146 77.6967 59.4156 78.1895 56.135C78.1603 53.4224 75.2906 51.7146 73.2275 50.6771V50.549C73.9467 50.2636 74.7734 50.0088 75.5191 49.9303V49.8574C71.8827 49.2068 68.3749 48.2563 64.8535 47.324C65.5311 48.8698 66.0207 50.4984 66.5858 52.1042C67.6431 51.7662 68.7291 51.5088 69.8702 51.3542C71.7275 52.0755 74.3849 53.1099 74.6478 55.4323C74.8541 57.6011 72.4791 58.6594 70.9786 59.5412C63.0197 62.437 54.0634 62.7194 45.7619 60.5178C43.4687 59.7948 40.1587 58.8678 39.8745 55.9479C41.5025 52.1042 45.7125 51.3042 49.2281 50.3703C47.4213 49.2068 45.5833 48.1755 43.8322 46.8807C41.9411 46.9855 40.2125 47.8131 38.5078 48.5558V48.5558ZM56.0937 25.3651L55.0634 28.6724L49.8958 43.4735C51.1901 43.6047 52.7915 43.4735 54.0634 43.6047V43.7266L53.3073 60.4683L53.4374 60.6454C55.0906 60.8068 57.1541 60.8902 58.8385 60.6011V60.3375L58.1645 44.0995L58.2655 43.55L62.8125 43.4735C60.5442 37.4823 58.3453 31.4303 56.2275 25.3651H56.0937V25.3651ZM53.6926 17.9292C57.4947 15.3391 60.9051 18.9588 63.8505 21.0287C75.2395 30.1954 85.9863 40.6875 94.1745 52.5364C95.2078 54.0656 95.6739 56.4402 94.7478 58.1698C92.6245 61.7115 89.7614 64.9432 87.0458 68.2246V68.4042C80.2749 75.6126 73.1245 83.0214 65.3967 89.1246C61.6265 91.4198 58.1645 96.4318 53.3073 93.3271C42.2478 85.2454 31.6639 75.1959 22.6915 64.4188C21.1707 62.05 18.7953 60.1088 17.7374 57.4208C16.2603 53.7823 19.5166 51.1703 21.3797 48.4307C30.5265 37.1479 41.8879 26.0844 53.6926 17.9292ZM63.2245 7.15216L59.0166 1.18749C58.4999 0.87189 57.8557 0.352157 57.2863 0.198957C56.0442 -0.33851 54.7051 0.310953 53.6926 1.08069L46.0749 11.0027C33.8557 26.1355 19.3901 40.2688 3.60671 51.1011C2.35931 52.0755 0.5041 53.0271 0.118682 54.6339C-0.2959 56.0792 0.457224 57.2714 1.35305 58.1698C13.9911 66.8755 26.0749 77.2088 36.8291 88.9938C38.739 91.0006 40.2863 92.9954 42.153 94.8782C45.2989 99.0646 48.9947 103.282 51.8858 107.773C52.7915 108.722 52.9483 110.279 54.3666 110.742C55.4759 111.126 56.8467 111.386 57.9051 110.742L58.9582 109.684C72.0354 91.1594 88.6191 74.524 107.148 61.0916C109.003 59.4355 112.544 58.8183 112.596 55.7432C112.463 54.3255 111.639 52.9292 110.421 52.1531L110.117 52.1042C100.581 45.6178 91.6978 38.2823 83.3281 29.9599L74.0781 20.2979C70.3306 16.1432 66.6895 11.5422 63.2245 7.15216V7.15216ZM52.327 15.6516C56.0442 12.7579 60.7223 15.1604 63.8505 17.8214C67.127 20.326 70.5385 23.1626 73.5338 26.0636L74.0781 26.376C82.3718 34.0708 90.0745 42.6224 96.4025 51.6651C97.4286 53.2386 98.3349 55.0208 97.7625 57.1099C95.651 62.385 91.3645 66.5907 87.6145 71.1959C79.5041 79.9266 70.9483 88.3746 61.3697 95.114C59.4322 96.4839 56.8197 97.749 54.4978 96.6604C47.4478 92.9708 41.5025 86.9266 35.3327 81.4172C28.1749 74.7807 20.9926 67.0552 15.5687 58.9735C14.763 57.8375 14.5358 56.4402 14.5587 54.9443C15.2567 52.1531 17.1666 49.8574 18.9759 47.5058C25.3854 39.3386 33.2363 31.5907 41.1639 24.5136C41.3467 24.3312 41.6858 23.9459 41.9723 23.7615C45.377 20.8183 48.7598 18.2115 52.327 15.6516Z"
        fill="#295FA3"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M75.2989 102.783H74.4969V101.766H75.1307C75.4745 101.766 75.9407 101.8 75.9407 102.237C75.9407 102.699 75.7031 102.783 75.2989 102.783V102.783ZM76.8973 102.327C76.8973 101.362 76.2599 101.059 75.1697 101.059H73.5959V105.27H74.4969V103.499H74.9245L75.8937 105.27H76.9677L75.8807 103.422C76.45 103.376 76.8973 103.099 76.8973 102.327ZM75.1473 106.177V106.164C73.5959 106.177 72.3453 104.969 72.3453 103.162C72.3453 101.362 73.5959 100.166 75.1473 100.166C76.6615 100.166 77.9521 101.362 77.9521 103.162C77.9521 104.969 76.6615 106.177 75.1473 106.177ZM75.1473 99.2531C73.0677 99.2531 71.2188 100.693 71.2188 103.162C71.2188 105.636 73.0677 107.081 75.1473 107.081C77.2131 107.081 79.0651 105.636 79.0651 103.162C79.0651 100.693 77.2131 99.2531 75.1473 99.2531Z"
        fill="#295FA3"
      />
    </g>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M405 15C398.373 15 393 20.3726 393 27V55L463 55V27C463 20.3726 457.627 15 451 15H405ZM463 61L393 61V87C393 93.6274 398.373 99 405 99H451C457.627 99 463 93.6274 463 87V61Z"
      fill="#295FA3"
    />
    <path
      d="M413.24 66.2C415.693 66.2 417.853 66.5867 419.72 67.36C421.613 68.1067 423.253 69.2133 424.64 70.68L421.32 75.12C420.173 73.92 418.933 73.0267 417.6 72.44C416.293 71.8267 414.8 71.52 413.12 71.52C411.653 71.52 410.6 71.76 409.96 72.24C409.32 72.72 409 73.3067 409 74C409 74.56 409.253 75.04 409.76 75.44C410.293 75.8133 411.147 76.1333 412.32 76.4L416.76 77.4C419.4 78.0133 421.333 78.9067 422.56 80.08C423.787 81.2533 424.4 82.8133 424.4 84.76C424.4 86.6267 423.92 88.2133 422.96 89.52C422 90.8 420.68 91.7733 419 92.44C417.32 93.08 415.4 93.4 413.24 93.4C410.573 93.4 408.133 92.9733 405.92 92.12C403.707 91.24 401.947 90.0933 400.64 88.68L403.96 84.08C404.947 85.2267 406.28 86.1867 407.96 86.96C409.64 87.7067 411.373 88.08 413.16 88.08C415.933 88.08 417.32 87.2667 417.32 85.64C417.32 85.08 417.107 84.6133 416.68 84.24C416.28 83.84 415.533 83.5067 414.44 83.24L409.56 82.16C408.067 81.84 406.733 81.3867 405.56 80.8C404.413 80.2133 403.507 79.44 402.84 78.48C402.173 77.4933 401.84 76.2667 401.84 74.8C401.84 73.1467 402.293 71.68 403.2 70.4C404.107 69.0933 405.413 68.0667 407.12 67.32C408.827 66.5733 410.867 66.2 413.24 66.2ZM431.101 93V66.6H443.941C447.195 66.6 449.595 67.2133 451.141 68.44C452.688 69.6667 453.461 71.4267 453.461 73.72C453.461 75.2133 453.021 76.5067 452.141 77.6C451.261 78.6933 449.915 79.3733 448.101 79.64V79.68C450.128 79.9467 451.635 80.6533 452.621 81.8C453.635 82.92 454.141 84.28 454.141 85.88C454.141 88.1467 453.328 89.9067 451.701 91.16C450.101 92.3867 447.715 93 444.541 93H431.101ZM437.741 77.4H442.741C445.195 77.4 446.421 76.44 446.421 74.52C446.421 72.6 445.195 71.64 442.741 71.64H437.741V77.4ZM437.741 88.16H443.381C445.861 88.16 447.101 87.1733 447.101 85.2C447.101 83.28 445.861 82.32 443.381 82.32H437.741V88.16Z"
      fill="white"
    />
    <path
      d="M408.8 22.6V34.32L418.24 22.6H425.88L416.92 33.32L426.36 49H418.56L412 37.68L408.8 41.56V49H401.92V22.6H408.8ZM453.934 22.6V38.24C453.934 45.68 450.001 49.4 442.134 49.4C438.268 49.4 435.334 48.48 433.334 46.64C431.334 44.7733 430.334 41.9733 430.334 38.24V22.6H437.254V38.36C437.254 42.12 438.881 44 442.134 44C445.414 44 447.054 42.12 447.054 38.36V22.6H453.934Z"
      fill="white"
    />
    <defs>
      <clipPath id="clip0">
        <rect width="381.2" height="111.133" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={'white'}
        color={'gray.600'}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={'gray.200'}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'start' }}
          alignItems="center"
        >
          <Link as={RouteLink} to="/">
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            >
              <LogoIcon h="8" w="auto" />
            </Text>
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={8}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Flex justify="center" alignItems="center">
            <Button
              fontSize={'md'}
              fontWeight={400}
              lineHeight="0"
              color={'white'}
              bg={'blue.400'}
              href={'#'}
              _hover={{
                bg: 'blue.300',
              }}
              rightIcon={
                <ArrowForwardIcon display={{ base: 'none', md: 'block' }} />
              }
            >
              <Text mb="-0.5">Join IEEE</Text>
            </Button>
          </Flex>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={5}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                as={RouteLink}
                p={2}
                to={navItem.href ?? '#'}
                fontSize={'md'}
                fontWeight={400}
                color={'gray.600'}
                _hover={{
                  textDecoration: 'none',
                  color: 'gray.800',
                }}
              >
                {navItem.label}
                {navItem.children && (
                  <Icon as={ChevronDownIcon} ml="1.5" w={5} h={5} />
                )}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                mt="2"
                border={0}
                boxShadow={'xl'}
                bg={'white'}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      to={href}
      as={RouteLink}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: 'blue.50' }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'blue.500' }}
            fontWeight={400}
          >
            {label}
          </Text>
          <Text fontSize={'md'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'blue.500'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={'white'} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={RouteLink}
        to={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={400} color={'gray.600'}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            color={'gray.600'}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={'gray.200'}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} as={RouteLink} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
