import { type Metadata } from 'next'
import Image, { ImageProps } from 'next/image'

import { Container } from '@/components/Container'
import portraitImage from '@/images/portrait.jpg'
import logoTW from '@/images/logos/tw.png'
import logoEvermos from '@/images/logos/evermos.png'
import logoMekari from '@/images/logos/mekari.png'
import logoAmikomCenter from '@/images/logos/amikomcenter.jpeg'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'

export const metadata: Metadata = {
    title: 'About',
    description:
        'I’m Hammam Firdaus. I live in Yogyakarta, where I prepare the future and catch up the dream.',
}

function SpeakingSection({
    children,
    ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
    return (
        <Section {...props}>
            <div className="space-y-6">{children}</div>
        </Section>
    )
}

export default function Experience() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <Resume />
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <div className="space-y-20">
                        <SpeakingSection title="Trinity Wizards">
                            <p className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
                                Working on building middleware for Malaysia Airlines using monorepo and implementing microservice.
                            </p>
                            <p className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
                                Revamp backend server (check-in domain) Malaysia Airlines for reducing complex algorithms and refactor N+1 code.
                            </p>
                            <p className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
                                Successfully reduce loading time on static files download on the server to 60% using LRU Cache.
                            </p>
                        </SpeakingSection>
                        <SpeakingSection title="Evermos">
                            <p className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
                                Successfully reduced the error process between services by implementing a robust retry mechanism and incorporating delay job techniques in background processing, resulting in an impressive 80% reduction in errors.
                            </p>
                            <p className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
                                Increase user satisfaction and successfully reduce manual review time from the internal Ads Reviewer Team by developing a customized onboarding ads system for Facebook Ads, significantly streamlining the process of setting up and managing ad campaigns.
                            </p>
                            <p className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
                                Increase speed and awareness at finding bugs to minimize disruptions and ensure a smooth user experience by Integrating a robust error monitoring and error alerting system with Sentry, into the Evermos App.
                            </p>
                        </SpeakingSection>
                        <SpeakingSection title="Mekari">
                            <p className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
                                Successfully reducing error escalation to Engineers from Technical Support by 70%. This was achieved by taking the initiative to build and develop new applications specifically designed to fix temporary bugs, resulting in a decreased workload and increased efficiency in bug resolution.
                            </p>
                            <p className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
                                Optimize performance and reduce delay in user assignments from around 15-60 seconds to less than 2 seconds by implementing a round-robin algorithm, identifying bottlenecks, and implementing performance optimizations such as caching mechanisms and database query optimizations.
                            </p>
                            <p className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
                                Successfully reduced workload webhook receiver by 30% by implementing buffer data and making batching process to write data with Apache Kafka.
                            </p>
                            <p className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400">
                                Mentored and provided guidance to internship engineers, supporting them in their professional growth and helping them navigate the challenges of software development. Shared my knowledge, best practices, and industry insights, fostering a positive learning environment and contributing to the interns development.
                            </p>
                        </SpeakingSection>
                    </div>
                </div>
            </div>
        </Container>
    )
}

function Resume() {
    let resume: Array<Role> = [
        {
            company: 'Trinity Wizards',
            title: 'Web Application Engineer',
            logo: logoTW,
            start: 'Aug 2023',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear().toString(),
            },
        },
        {
            company: 'Evermos',
            title: 'Backend Engineer',
            logo: logoEvermos,
            start: 'Dec 2022',
            end: 'May 2022',
        },
        {
            company: 'Mekari',
            title: 'Software Engineer',
            logo: logoMekari,
            start: 'Apr 2021',
            end: 'Dec 2022',
        },
    ]

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <Role key={roleIndex} role={role} />
                ))}
            </ol>
            <Button href="https://drive.google.com/drive/folders/142Y1hrtD5Ur0l_xbztLttt0lkvgTGJ-3" variant="secondary" className="group mt-6 w-full">
                Download CV
                <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
        </div>
    )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

interface Role {
    company: string
    title: string
    logo: ImageProps['src']
    start: string | { label: string; dateTime: string }
    end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
    let startLabel =
        typeof role.start === 'string' ? role.start : role.start.label
    let startDate =
        typeof role.start === 'string' ? role.start : role.start.dateTime

    let endLabel = typeof role.end === 'string' ? role.end : role.end.label
    let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

    return (
        <li className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {role.company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    {role.title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                    className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                    aria-label={`${startLabel} until ${endLabel}`}
                >
                    <time dateTime={startDate}>{startLabel}</time>{' '}
                    <span aria-hidden="true">—</span>{' '}
                    <time dateTime={endDate}>{endLabel}</time>
                </dd>
            </dl>
        </li>
    )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}