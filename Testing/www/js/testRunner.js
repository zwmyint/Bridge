﻿/* global Bridge */

"use strict";

Bridge.define('ClientTestLibrary.RunTests', {
    statics: {
        config: {
            init: function () {
                Bridge.ready(this.main);
            }
        },
        main: function () {
            Bridge.get(QUnit).module("Inheritance, abstract, virtual and overloading");
            Bridge.get(QUnit).test("Overloading static methods", Bridge.get(ClientTestLibrary.TestOverloadStaticMethods).testStatic);
            Bridge.get(QUnit).test("Overloading instance methods", Bridge.get(ClientTestLibrary.TestOverloadInstanceMethods).testInstance);
            Bridge.get(QUnit).test("Inheritance A instance", Bridge.get(ClientTestLibrary.TestInheritance).testA);
            Bridge.get(QUnit).test("Inheritance B instance", Bridge.get(ClientTestLibrary.TestInheritance).testB);
            Bridge.get(QUnit).test("Inheritance B instance as A type", Bridge.get(ClientTestLibrary.TestInheritance).testAB);
            Bridge.get(QUnit).test("Abstract B instance", Bridge.get(ClientTestLibrary.TestAbstractClass).testB);
            Bridge.get(QUnit).test("Abstract C instance", Bridge.get(ClientTestLibrary.TestAbstractClass).testC);
            Bridge.get(QUnit).test("Abstract BC instance as A type", Bridge.get(ClientTestLibrary.TestAbstractClass).testBC);
            Bridge.get(QUnit).test("Virtual methods", Bridge.get(ClientTestLibrary.TestVirtualMethods).testB);

            Bridge.get(QUnit).module("Reference types");
            Bridge.get(QUnit).test("Instance constructors and methods", Bridge.get(ClientTestLibrary.TestReferenceTypes).testInstanceConstructorsAndMethods);
            Bridge.get(QUnit).test("Static constructors and methods", Bridge.get(ClientTestLibrary.TestReferenceTypes).testStaticConstructorsAndMethods);
            Bridge.get(QUnit).test("Method parameters", Bridge.get(ClientTestLibrary.TestReferenceTypes).testMethodParameters);

            Bridge.get(QUnit).module("Value types");
            Bridge.get(QUnit).test("Instance constructors and methods", Bridge.get(ClientTestLibrary.TestValueTypes).testInstanceConstructorsAndMethods);
            Bridge.get(QUnit).test("Static constructors and methods", Bridge.get(ClientTestLibrary.TestValueTypes).testStaticConstructorsAndMethods);

            Bridge.get(QUnit).module("Interfaces");
            Bridge.get(QUnit).test("Interface method and property", Bridge.get(ClientTestLibrary.TestInterfaces).testInterfaceMethodAndProperty);
            Bridge.get(QUnit).test("Explicit interface", Bridge.get(ClientTestLibrary.TestInterfaces).testExplicitInterfaceMethodAndProperty);
            Bridge.get(QUnit).test("Simple two interfaces", Bridge.get(ClientTestLibrary.TestInterfaces).testTwoInterfaces);

            Bridge.get(QUnit).module("Method parameters");
            Bridge.get(QUnit).test("Default and params", Bridge.get(ClientTestLibrary.TestMethodParametersClass).test);

            Bridge.get(QUnit).module("String");
            Bridge.get(QUnit).test("Common", Bridge.get(ClientTestLibrary.TestStringFunctions).strings);
            Bridge.get(QUnit).test("String Enumerable", Bridge.get(ClientTestLibrary.TestStringFunctions).enumerable);
            Bridge.get(QUnit).test("String #393", Bridge.get(ClientTestLibrary.TestStringFunctions).issueBridge393);
            Bridge.get(QUnit).test("StringBuilder", Bridge.get(ClientTestLibrary.TestStringBuilderFunctions).stringBuilders);

            Bridge.get(QUnit).module("Enum");
            Bridge.get(QUnit).test("Parse", Bridge.get(ClientTestLibrary.TestEnum).testParse);
            Bridge.get(QUnit).test("ParseIgnoreCase", Bridge.get(ClientTestLibrary.TestEnum).testParseIgnoreCase);
            Bridge.get(QUnit).test("ToString", Bridge.get(ClientTestLibrary.TestEnum).testToString);
            Bridge.get(QUnit).test("GetValues", Bridge.get(ClientTestLibrary.TestEnum).testGetValues);
            Bridge.get(QUnit).test("CompareTo", Bridge.get(ClientTestLibrary.TestEnum).testCompareTo);
            Bridge.get(QUnit).test("Format", Bridge.get(ClientTestLibrary.TestEnum).testFormat);
            Bridge.get(QUnit).test("GetName", Bridge.get(ClientTestLibrary.TestEnum).testGetName);
            Bridge.get(QUnit).test("GetNames", Bridge.get(ClientTestLibrary.TestEnum).testGetNames);
            Bridge.get(QUnit).test("HasFlag", Bridge.get(ClientTestLibrary.TestEnum).testHasFlag);
            Bridge.get(QUnit).test("IsDefined", Bridge.get(ClientTestLibrary.TestEnum).testIsDefined);
            Bridge.get(QUnit).test("TryParse", Bridge.get(ClientTestLibrary.TestEnum).testTryParse);

            Bridge.get(QUnit).module("Date and time");
            Bridge.get(QUnit).test("Common", Bridge.get(ClientTestLibrary.TestDateFunctions).dateTimes);
            Bridge.get(QUnit).test("#329", Bridge.get(ClientTestLibrary.TestDateFunctions).bridge329);
            Bridge.get(QUnit).test("#349", Bridge.get(ClientTestLibrary.TestDateFunctions).bridge349);

            Bridge.get(QUnit).module("Try/Catch");
            Bridge.get(QUnit).test("Try/Catch simpe", Bridge.get(ClientTestLibrary.TestTryCatchBlocks).simpleTryCatch);
            Bridge.get(QUnit).test("Try/Catch caught exceptions", Bridge.get(ClientTestLibrary.TestTryCatchBlocks).caughtExceptions);
            Bridge.get(QUnit).test("Try/Catch thrown exceptions", Bridge.get(ClientTestLibrary.TestTryCatchBlocks).thrownExceptions);
            Bridge.get(QUnit).test("#320", Bridge.get(ClientTestLibrary.TestTryCatchBlocks).bridge320);
            Bridge.get(QUnit).test("#343", Bridge.get(ClientTestLibrary.TestTryCatchBlocks).bridge343);
            Bridge.get(QUnit).test("Try/Catch/Finally simple", Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).simpleTryCatchFinally);
            Bridge.get(QUnit).test("Try/Catch/Finally caught exceptions", Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).caughtExceptions);
            Bridge.get(QUnit).test("Try/Catch/Finally thrown exceptions", Bridge.get(ClientTestLibrary.TestTryCatchFinallyBlocks).thrownExceptions);

            Bridge.get(QUnit).module("System");
            Bridge.get(QUnit).test("Version TestConstructors", Bridge.get(ClientTestLibrary.TestVersion).testConstructors);
            Bridge.get(QUnit).test("Version Equals and GetHashCode", Bridge.get(ClientTestLibrary.TestVersion).testEqualsGetHashCode);
            Bridge.get(QUnit).test("Version ToString", Bridge.get(ClientTestLibrary.TestVersion).testToString);
            Bridge.get(QUnit).test("Version Parse", Bridge.get(ClientTestLibrary.TestVersion).testParse);
            Bridge.get(QUnit).test("Version Operators", Bridge.get(ClientTestLibrary.TestVersion).testOperators);
            Bridge.get(QUnit).test("Version #499", Bridge.get(ClientTestLibrary.TestVersion).testIssue499);

            Bridge.get(QUnit).module("Issues");
            Bridge.get(QUnit).test("#169", Bridge.get(ClientTestLibrary.TestBridgeIssues).n169);
            Bridge.get(QUnit).test("#240", Bridge.get(ClientTestLibrary.TestBridgeIssues).n240);
            Bridge.get(QUnit).test("#264", Bridge.get(ClientTestLibrary.TestBridgeIssues).n264);
            Bridge.get(QUnit).test("#266", Bridge.get(ClientTestLibrary.TestBridgeIssues).n266);
            Bridge.get(QUnit).test("#272", Bridge.get(ClientTestLibrary.TestBridgeIssues).n272);
            Bridge.get(QUnit).test("#273", Bridge.get(ClientTestLibrary.TestBridgeIssues).n273);
            Bridge.get(QUnit).test("#277", Bridge.get(ClientTestLibrary.TestBridgeIssues).n277);
            Bridge.get(QUnit).test("#294", Bridge.get(ClientTestLibrary.TestBridgeIssues).n294);
            Bridge.get(QUnit).test("#304", Bridge.get(ClientTestLibrary.TestBridgeIssues).n304);
            Bridge.get(QUnit).test("#305", Bridge.get(ClientTestLibrary.TestBridgeIssues).n305);
            Bridge.get(QUnit).test("#306", Bridge.get(ClientTestLibrary.TestBridgeIssues).n306);
            Bridge.get(QUnit).test("#335", Bridge.get(ClientTestLibrary.TestBridgeIssues).n335);
            Bridge.get(QUnit).test("#336", Bridge.get(ClientTestLibrary.TestBridgeIssues).n336);
            Bridge.get(QUnit).test("#337", Bridge.get(ClientTestLibrary.TestBridgeIssues).n337);
            Bridge.get(QUnit).test("#338", Bridge.get(ClientTestLibrary.TestBridgeIssues).n338);
            Bridge.get(QUnit).test("#339", Bridge.get(ClientTestLibrary.TestBridgeIssues).n339);
            Bridge.get(QUnit).test("#340", Bridge.get(ClientTestLibrary.TestBridgeIssues).n340);
            Bridge.get(QUnit).test("#341", Bridge.get(ClientTestLibrary.TestBridgeIssues).n341);
            Bridge.get(QUnit).test("#342", Bridge.get(ClientTestLibrary.TestBridgeIssues).n342);
            Bridge.get(QUnit).test("#377", Bridge.get(ClientTestLibrary.TestBridgeIssues).n377);
            Bridge.get(QUnit).test("#381", Bridge.get(ClientTestLibrary.Bridge381).testUseCase);
            Bridge.get(QUnit).test("#383", Bridge.get(ClientTestLibrary.TestBridgeIssues).n383);
            Bridge.get(QUnit).test("#395", Bridge.get(ClientTestLibrary.TestBridgeIssues).n395);
            Bridge.get(QUnit).test("#406", Bridge.get(ClientTestLibrary.TestBridgeIssues).n406);
            Bridge.get(QUnit).test("#407", Bridge.get(ClientTestLibrary.TestBridgeIssues).n407);
            Bridge.get(QUnit).test("#409", Bridge.get(ClientTestLibrary.TestBridgeIssues).n409);
            Bridge.get(QUnit).test("#410", Bridge.get(ClientTestLibrary.TestBridgeIssues).n410);
            Bridge.get(QUnit).test("#418", Bridge.get(ClientTestLibrary.TestBridgeIssues).n418);
            Bridge.get(QUnit).test("#422", Bridge.get(ClientTestLibrary.TestBridgeIssues).n422);
            Bridge.get(QUnit).test("#428", Bridge.get(ClientTestLibrary.TestBridgeIssues).n428);
            Bridge.get(QUnit).test("#435", Bridge.get(ClientTestLibrary.TestBridgeIssues).n435);
            Bridge.get(QUnit).test("#436", Bridge.get(ClientTestLibrary.TestBridgeIssues).n436);
            Bridge.get(QUnit).test("#438", Bridge.get(ClientTestLibrary.TestBridgeIssues).n438);
            Bridge.get(QUnit).test("#439", Bridge.get(ClientTestLibrary.TestBridgeIssues).n439);
            Bridge.get(QUnit).test("#442", Bridge.get(ClientTestLibrary.TestBridgeIssues).n442);
            Bridge.get(QUnit).test("#460", Bridge.get(ClientTestLibrary.TestBridgeIssues).n460);
            Bridge.get(QUnit).test("#467", Bridge.get(ClientTestLibrary.TestBridgeIssues).n467);
            Bridge.get(QUnit).test("#469", Bridge.get(ClientTestLibrary.TestBridgeIssues).n469);
            Bridge.get(QUnit).test("#470", Bridge.get(ClientTestLibrary.TestBridgeIssues).n470);
            Bridge.get(QUnit).test("#472", Bridge.get(ClientTestLibrary.Bridge472).test);
            Bridge.get(QUnit).test("#479", Bridge.get(ClientTestLibrary.Bridge479).testUseCase);
            Bridge.get(QUnit).test("#485", Bridge.get(ClientTestLibrary.Bridge485).testUseCase);
            Bridge.get(QUnit).test("#495", Bridge.get(ClientTestLibrary.Bridge495).testUseCase);
            Bridge.get(QUnit).test("#501", Bridge.get(ClientTestLibrary.Bridge501).testUseCase);
            Bridge.get(QUnit).test("#502", Bridge.get(ClientTestLibrary.Bridge502).testUseCase);
            Bridge.get(QUnit).test("#503", Bridge.get(ClientTestLibrary.Bridge503).testUseCase);
            Bridge.get(QUnit).test("#508", Bridge.get(ClientTestLibrary.Bridge508).testUseCase);
            Bridge.get(QUnit).test("#514", Bridge.get(ClientTestLibrary.Bridge514).testUseCase);
            Bridge.get(QUnit).test("#514", Bridge.get(ClientTestLibrary.Bridge514).testRelated);
            Bridge.get(QUnit).test("#520", Bridge.get(ClientTestLibrary.Bridge520).testUseCase);
            Bridge.get(QUnit).test("#522", Bridge.get(ClientTestLibrary.Bridge522).testUseCase1);
            Bridge.get(QUnit).test("#522", Bridge.get(ClientTestLibrary.Bridge522).testUseCase2);
            Bridge.get(QUnit).test("#532", Bridge.get(ClientTestLibrary.Bridge532).testUseCase);
            Bridge.get(QUnit).test("#537", Bridge.get(ClientTestLibrary.Bridge537).testUseCase);
            Bridge.get(QUnit).test("#538", Bridge.get(ClientTestLibrary.Bridge538).testUseCase);
            Bridge.get(QUnit).test("#544", Bridge.get(ClientTestLibrary.Bridge544).testUseCase);
            Bridge.get(QUnit).test("#544", Bridge.get(ClientTestLibrary.Bridge544).testRelated);
            Bridge.get(QUnit).test("#546", Bridge.get(ClientTestLibrary.Bridge546).testUseCase);
            Bridge.get(QUnit).test("#546", Bridge.get(ClientTestLibrary.Bridge546).testRelated);
            Bridge.get(QUnit).test("#548", Bridge.get(ClientTestLibrary.Bridge548).testUseCase);
            Bridge.get(QUnit).test("#549", Bridge.get(ClientTestLibrary.Bridge549).testUseCase);
            Bridge.get(QUnit).test("#550", Bridge.get(ClientTestLibrary.Bridge550).testUseCase);
            Bridge.get(QUnit).test("#554", Bridge.get(ClientTestLibrary.Bridge554).testUseCase);
            Bridge.get(QUnit).test("#555", Bridge.get(ClientTestLibrary.Bridge555).testUseCase);
            Bridge.get(QUnit).test("#558", Bridge.get(ClientTestLibrary.Bridge558).testUseCase);
            Bridge.get(QUnit).test("#559", Bridge.get(ClientTestLibrary.Bridge559).testUseCase1);
            Bridge.get(QUnit).test("#559", Bridge.get(ClientTestLibrary.Bridge559).testUseCase2);
            Bridge.get(QUnit).test("#559", Bridge.get(ClientTestLibrary.Bridge559).testUseCase3);
            Bridge.get(QUnit).test("#563", Bridge.get(ClientTestLibrary.Bridge563).tesForeach);
            Bridge.get(QUnit).test("#563", Bridge.get(ClientTestLibrary.Bridge563).tesFor);
            Bridge.get(QUnit).test("#565", Bridge.get(ClientTestLibrary.Bridge565).testUseCase);
            Bridge.get(QUnit).test("#566", Bridge.get(ClientTestLibrary.Bridge566).testUseCase);
            Bridge.get(QUnit).test("#572", Bridge.get(ClientTestLibrary.Bridge572).testUseCase);
            Bridge.get(QUnit).test("#577", Bridge.get(ClientTestLibrary.Bridge577).testUseCase);
            Bridge.get(QUnit).test("#578", Bridge.get(ClientTestLibrary.Bridge578).testUseCase);
            Bridge.get(QUnit).test("#580", Bridge.get(ClientTestLibrary.Bridge580).testUseCase);
            Bridge.get(QUnit).test("#582", Bridge.get(ClientTestLibrary.Bridge582).testAddTicks);
            Bridge.get(QUnit).test("#582", Bridge.get(ClientTestLibrary.Bridge582).testAddTimeSpan);
            Bridge.get(QUnit).test("#582", Bridge.get(ClientTestLibrary.Bridge582).testSubtractTimeSpan);
            Bridge.get(QUnit).test("#582", Bridge.get(ClientTestLibrary.Bridge582).testTimeOfDay);
            Bridge.get(QUnit).test("#582", Bridge.get(ClientTestLibrary.Bridge582).testTicks);
            Bridge.get(QUnit).test("#583", Bridge.get(ClientTestLibrary.Bridge583).testUseCase);
            Bridge.get(QUnit).test("#586", Bridge.get(ClientTestLibrary.Bridge586).testUseCase);
            Bridge.get(QUnit).test("#588", Bridge.get(ClientTestLibrary.Bridge588).testUseCase);
            Bridge.get(QUnit).test("#588", Bridge.get(ClientTestLibrary.Bridge588C).testUseCase);
            Bridge.get(QUnit).test("#592", Bridge.get(ClientTestLibrary.Bridge592).testUseCase);
            Bridge.get(QUnit).test("#595", Bridge.get(ClientTestLibrary.Bridge595).testUseCase);
            Bridge.get(QUnit).test("#597", Bridge.get(ClientTestLibrary.Bridge597).testUseCase);
            Bridge.get(QUnit).test("#603", Bridge.get(ClientTestLibrary.Bridge603).testUseCase);
            Bridge.get(QUnit).test("#603", Bridge.get(ClientTestLibrary.Bridge603).testRelated);
            Bridge.get(QUnit).test("#606", Bridge.get(ClientTestLibrary.Bridge606).testUseCase);
            Bridge.get(QUnit).test("#607", Bridge.get(ClientTestLibrary.Bridge607).testUseCase);
            Bridge.get(QUnit).test("#608", Bridge.get(ClientTestLibrary.Bridge608).testUseCase);
            Bridge.get(QUnit).test("#615", Bridge.get(ClientTestLibrary.Bridge615).testUseCase);
            Bridge.get(QUnit).test("#623", Bridge.get(ClientTestLibrary.Bridge623).testUseCase);
            Bridge.get(QUnit).test("#634", Bridge.get(ClientTestLibrary.Bridge634).testUseCase1);
            Bridge.get(QUnit).test("#634", Bridge.get(ClientTestLibrary.Bridge634).testUseCase2);
            Bridge.get(QUnit).test("#634", Bridge.get(ClientTestLibrary.Bridge634).testUseCaseFor658);
            Bridge.get(QUnit).test("#635", Bridge.get(ClientTestLibrary.Bridge635).testUseCase);
            Bridge.get(QUnit).test("#647", Bridge.get(ClientTestLibrary.Bridge647).testUseCase);
            Bridge.get(QUnit).test("#648", Bridge.get(ClientTestLibrary.Bridge648).testUseCase);
            Bridge.get(QUnit).test("#652", Bridge.get(ClientTestLibrary.Bridge652).testUseCase);
            Bridge.get(QUnit).test("#655", Bridge.get(ClientTestLibrary.Bridge655).testUseCase);
            Bridge.get(QUnit).test("#661", Bridge.get(ClientTestLibrary.Bridge661).testUseCase);
            Bridge.get(QUnit).test("#664", Bridge.get(ClientTestLibrary.Bridge664).testUseCase);
            Bridge.get(QUnit).test("#666", Bridge.get(ClientTestLibrary.Bridge666).testUseCase);
            Bridge.get(QUnit).test("#671", Bridge.get(ClientTestLibrary.Bridge671).testUseCase);
            Bridge.get(QUnit).test("#674", Bridge.get(ClientTestLibrary.Bridge674).testUseCase);
            Bridge.get(QUnit).test("#675", Bridge.get(ClientTestLibrary.Bridge675).testUseCase);

            Bridge.get(QUnit).module("LINQ");
            Bridge.get(QUnit).test("Aggregate operators", Bridge.get(ClientTestLibrary.Linq.TestLinqAggregateOperators).test);
            Bridge.get(QUnit).test("Aggregate operators", Bridge.get(ClientTestLibrary.Linq.TestLinqAggregateOperators).bridge315);
            Bridge.get(QUnit).test("Conversion operators", Bridge.get(ClientTestLibrary.Linq.TestLinqConversionOperators).test);
            Bridge.get(QUnit).test("Element operators", Bridge.get(ClientTestLibrary.Linq.TestLinqElementOperators).test);
            Bridge.get(QUnit).test("Generation operators", Bridge.get(ClientTestLibrary.Linq.TestLinqGenerationOperators).test);
            Bridge.get(QUnit).test("Join operators", Bridge.get(ClientTestLibrary.Linq.TestLinqJoinOperators).test);
            Bridge.get(QUnit).test("Grouping operators", Bridge.get(ClientTestLibrary.Linq.TestLinqGroupingOperators).test);
            Bridge.get(QUnit).test("Complex grouping operators.", Bridge.get(ClientTestLibrary.Linq.TestLinqGroupingOperators).testComplexGrouping);
            Bridge.get(QUnit).test("Anagram grouping operators.", Bridge.get(ClientTestLibrary.Linq.TestLinqGroupingOperators).testAnagrams);
            Bridge.get(QUnit).test("Miscellaneous operators", Bridge.get(ClientTestLibrary.Linq.TestLinqMiscellaneousOperators).test);
            Bridge.get(QUnit).test("Ordering operators", Bridge.get(ClientTestLibrary.Linq.TestLinqOrderingOperators).test);
            Bridge.get(QUnit).test("Partitioning operators", Bridge.get(ClientTestLibrary.Linq.TestLinqPartitioningOperators).test);
            Bridge.get(QUnit).test("Projection operators", Bridge.get(ClientTestLibrary.Linq.TestLinqProjectionOperators).test);
            Bridge.get(QUnit).test("Quantifiers", Bridge.get(ClientTestLibrary.Linq.TestLinqQuantifiers).test);
            Bridge.get(QUnit).test("Query execution", Bridge.get(ClientTestLibrary.Linq.TestLinqQueryExecution).test);
            Bridge.get(QUnit).test("Restriction operators", Bridge.get(ClientTestLibrary.Linq.TestLinqRestrictionOperators).test);
            Bridge.get(QUnit).test("Set operators", Bridge.get(ClientTestLibrary.Linq.TestLinqSetOperators).test);
        }
    }
});

Bridge.init();