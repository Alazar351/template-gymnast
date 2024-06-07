"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { cn } from "@/lib/utils";

export default function Schedule() {
  return (
    <div className="mt-12 py-12">
      <div className="flex flex-col items-center justify-center">
        <h4 className="font-oswald text-[clamp(21px,5vw,24px)] font-bold text-[#E31C25]">
          Class Timetable
        </h4>
        <p className="mt-2 font-oswald text-[clamp(37px,5vw,56px)] font-bold text-[#343a40]">
          Working Hours and Class Time
        </p>
      </div>
      <div className="mt-14">
        <DataTable />
      </div>
    </div>
  );
}

function DataTable() {
  const [active, setActive] = useState("default");

  return (
    <>
      <div className="flex justify-center ">
        <Button
          onClick={() => setActive("default")}
          className={cn(
            "rounded-none bg-transparent px-4 py-2 text-base text-[#e31c25] hover:bg-transparent hover:text-[#9f141a]",
            active === "default" &&
              "bg-[#e31c25] text-white hover:bg-[#e31c25] hover:text-white",
          )}
        >
          All Classes
        </Button>
        <Button
          onClick={() => setActive("Cardio")}
          className={cn(
            "rounded-none bg-transparent px-4 py-2 text-base text-[#e31c25] hover:bg-transparent hover:text-[#9f141a]",
            active === "Cardio" &&
              "bg-[#e31c25] text-white hover:bg-[#e31c25] hover:text-white",
          )}
        >
          Cardio
        </Button>
        <Button
          onClick={() => setActive("Crossfit")}
          className={cn(
            "rounded-none bg-transparent px-4 py-2 text-base text-[#e31c25] hover:bg-transparent hover:text-[#9f141a]",
            active === "Crossfit" &&
              "bg-[#e31c25] text-white hover:bg-[#e31c25] hover:text-white",
          )}
        >
          Crossfit
        </Button>
        <Button
          onClick={() => setActive("Powerlifting")}
          className={cn(
            "rounded-none bg-transparent px-4 py-2 text-base text-[#e31c25] hover:bg-transparent hover:text-[#9f141a]",
            active === "Powerlifting" &&
              "bg-[#e31c25] text-white hover:bg-[#e31c25] hover:text-white",
          )}
        >
          Powerlifting
        </Button>
      </div>
      <div className="px-[15px]">
        <Table className="mt-4 ">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[174px] border border-white bg-black text-center text-white">
                Time
              </TableHead>
              <TableHead className="border border-white bg-black text-center text-white">
                Monday
              </TableHead>
              <TableHead className="border border-white bg-black text-center text-white">
                Tuesday
              </TableHead>
              <TableHead className="border border-white bg-black text-center text-white">
                Wednesday
              </TableHead>
              <TableHead className="border border-white bg-black text-center text-white">
                Thursday
              </TableHead>
              <TableHead className="border border-white bg-black text-center text-white">
                Friday
              </TableHead>
              <TableHead className="border border-white bg-black text-center text-white">
                Saturday
              </TableHead>
              <TableHead className="border border-white bg-black text-center text-white">
                Sunday
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border border-white bg-black text-white">
                6.00am - 8.00am
              </TableCell>
              <TableCell
                className={cn(
                  "text-center",
                  active === "Cardio" && "bg-[#e31c25] text-white",
                )}
              >
                <h5 className="mb-2 font-oswald text-[20px] font-medium ">
                  Cardio
                </h5>
                <p>John Deo</p>
              </TableCell>
              <TableCell className="text-center"></TableCell>
              <TableCell
                className={cn(
                  "text-center",
                  active === "Crossfit" && "bg-[#e31c25] text-white",
                )}
              >
                <h5 className="mb-2 font-oswald text-[20px] font-medium ">
                  Crossfit
                </h5>
                <p>Adam Philips</p>
              </TableCell>
              <TableCell className="text-center"></TableCell>
              <TableCell
                className={cn(
                  "text-center",
                  active === "Powerlifting" && "bg-[#e31c25] text-white",
                )}
              >
                <h5 className="mb-2 font-oswald text-[20px] font-medium ">
                  Power Lifting
                </h5>
                <p>James Alien</p>
              </TableCell>
              <TableCell className="text-center"></TableCell>
              <TableCell
                className={cn(
                  "text-center",
                  active === "Cardio" && "bg-[#e31c25] text-white",
                )}
              >
                <h5 className="mb-2 font-oswald text-[20px] font-medium ">
                  Cardio
                </h5>
                <p>John Deo</p>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border border-white bg-black text-white">
                10.00am - 12.00am
              </TableCell>
              <TableCell></TableCell>
              <TableCell
                className={cn(
                  "text-center",
                  active === "Powerlifting" && "bg-[#e31c25] text-white",
                )}
              >
                <h5 className="mb-2 font-oswald text-[20px] font-medium ">
                  Power Lifting
                </h5>
                <p>James Alien</p>
              </TableCell>
              <TableCell></TableCell>
              <TableCell
                className={cn(
                  "text-center",
                  active === "Cardio" && "bg-[#e31c25] text-white",
                )}
              >
                <h5 className="mb-2 font-oswald text-[20px] font-medium ">
                  Cardio
                </h5>
                <p className="">John Deo</p>
              </TableCell>
              <TableCell></TableCell>
              <TableCell
                className={cn(
                  "text-center",
                  active === "Crossfit" && "bg-[#e31c25] text-white",
                )}
              >
                <h5 className="mb-2 font-oswald text-[20px] font-medium ">
                  Crossfit
                </h5>
                <p className="">Adam Philips</p>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border border-white bg-black text-white">
                5.00pm - 7.00pm
              </TableCell>
              <TableCell
                className={cn(
                  "text-center",
                  active === "Crossfit" && "bg-[#e31c25] text-white",
                )}
              >
                <h5
                  id="Crossfit"
                  className="mb-2 font-oswald text-[20px] font-medium "
                >
                  Crossfit
                </h5>
                <p>Adam Philips</p>
              </TableCell>
              <TableCell></TableCell>
              <TableCell
                className={cn(
                  "text-center",
                  active === "Powerlifting" && "bg-[#e31c25] text-white",
                )}
              >
                <h5 className="mb-2 font-oswald text-[20px] font-medium ">
                  Power Lifting
                </h5>
                <p>James Alien</p>
              </TableCell>
              <TableCell></TableCell>
              <TableCell
                className={cn(
                  "text-center",
                  active === "Cardio" && "bg-[#e31c25] text-white",
                )}
              >
                <h5 className="mb-2 font-oswald text-[20px] font-medium ">
                  Cardio
                </h5>
                <p>John Deo</p>
              </TableCell>
              <TableCell></TableCell>
              <TableCell
                className={cn(
                  "text-center",
                  active === "Crossfit" && "bg-[#e31c25] text-white",
                )}
              >
                <h5 className="mb-2 font-oswald text-[20px] font-medium ">
                  Crossfit
                </h5>
                <p>Adam Philips</p>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-transparent">
              <TableCell className="border border-white bg-black text-white">
                7.00pm - 9.00pm
              </TableCell>
              <TableCell></TableCell>
              <TableCell
                className={cn(
                  "text-center",
                  active === "Cardio" && "bg-[#e31c25] text-white",
                )}
              >
                <h5 className="mb-2 font-oswald text-[20px] font-medium ">
                  Cardio
                </h5>
                <p>John Deo</p>
              </TableCell>
              <TableCell></TableCell>
              <TableCell
                className={cn(
                  "text-center",
                  active === "Crossfit" && "bg-[#e31c25] text-white",
                )}
              >
                <h5
                  id="Crossfit"
                  className="mb-2 font-oswald text-[20px] font-medium "
                >
                  Crossfit
                </h5>
                <p>Adam Philips</p>
              </TableCell>
              <TableCell></TableCell>
              <TableCell
                className={cn(
                  "text-center",
                  active === "Powerlifting" && "bg-[#e31c25] text-white",
                )}
              >
                <h5 className="mb-2 font-oswald text-[20px] font-medium ">
                  Power Lifting
                </h5>
                <p>James Alien</p>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
